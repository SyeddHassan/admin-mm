"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import { RealTimeMapProps } from "@/interfaces/dashboard-page-components-interface";

export const RealTimeMap = ({
  selectedTab,
  data,
  selectedCountry,
}: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<am5map.MapChart | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        pinchZoom: false,
      })
    );

    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0xe3e6e8),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x494af8),
    });

    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {
        groupIdField: "countryId",
        minDistance: 100,
        scatterDistance: 90,
        scatterRadius: 90,
        stopClusterZoom: 0.5,
      })
    );

    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 16,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          // tooltipText: "{value}",
          interactive: true,
          cursorOverStyle: "pointer",
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          text: "{value}",
          fill: am5.color(0xffffff),
          fontSize: 13,
          fontFamily: "Jetbrains mono",
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
        })
      );

      circle.animate({
        key: "scale",
        from: 0.5,
        to: 5,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      circle.animate({
        key: "opacity",
        from: 0.5,
        to: 0.1,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      container.events.on("click", function (e) {
        const dataItem = e.target.dataItem;
        if (dataItem) {
          pointSeries.zoomToCluster(dataItem);
        }
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    pointSeries.bullets.push(function () {
      const container = am5.Container.new(root, {});

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 9,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 30,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText:
            "[bold]{countryName}, {cityName}\n\n[bold]Sessions: [normal]{citySessions}\n[bold]Users: [normal]{cityUsers}",
          interactive: true,
          cursorOverStyle: "pointer",
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          text: selectedTab === "sessions" ? "{citySessions}" : "{cityUsers}",
          fill: am5.color(0xffffff),
          fontSize: 11,
          fontFamily: "Jetbrains mono",
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
        })
      );

      circle.animate({
        key: "scale",
        from: 0.5,
        to: 5,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      circle.animate({
        key: "opacity",
        from: 0.5,
        to: 0.1,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    data.forEach((country) => {
      country.countryCities.forEach((city) => {
        pointSeries.data.push({
          geometry: {
            type: "Point",
            coordinates: [city.cityLongitude, city.cityLatitude],
          },
          cityName: city.cityName,
          citySessions: city.citySessions,
          cityUsers: city.cityUsers,
          countryName: country.countryName,
          countryId: country.countryId,
        });
      });
    });

    chartInstance.current = chart;

    return () => {
      root.dispose();
    };
  }, [data, selectedTab]);

  useEffect(() => {
    if (selectedCountry && chartInstance.current) {
      const { longitude, latitude } = selectedCountry;

      chartInstance.current.zoomToGeoPoint({ longitude, latitude }, 16, true);
    }
  }, [selectedCountry]);

  return <div ref={chartRef} className="h-full w-full" />;
};
