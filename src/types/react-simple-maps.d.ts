declare module 'react-simple-maps' {
  import * as React from 'react';
  import { Feature, Geometry, GeoJsonProperties } from 'geojson';

  export interface ComposableMapProps {
    projection?: string | (() => any);
    projectionConfig?: {
      scale?: number;
      xOffset?: number;
      yOffset?: number;
      rotation?: [number, number, number];
      precision?: number;
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }

  export interface GeographiesProps {
    geography: string | Record<string, any> | string[];
    children: (props: {
      geographies: Array<Feature<Geometry, GeoJsonProperties>>;
    }) => React.ReactNode;
  }

  export interface GeographyProps {
    geography: Feature<Geometry, GeoJsonProperties>;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    [key: string]: any;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    [key: string]: any;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    [key: string]: any;
  }

  export const ComposableMap: React.ComponentType<ComposableMapProps>;
  export const Geographies: React.ComponentType<GeographiesProps>;
  export const Geography: React.ComponentType<GeographyProps>;
  export const Marker: React.ComponentType<MarkerProps>;
  export const ZoomableGroup: React.ComponentType<ZoomableGroupProps>;

  export type GeoJsonProperties = GeoJsonProperties;
  export type Feature = Feature;
  export type Geometry = Geometry;
}
