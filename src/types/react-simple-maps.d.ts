declare module 'react-simple-maps' {
  import type * as React from 'react';
  import type { Feature, Geometry, GeoJsonProperties } from 'geojson';

  export interface ComposableMapProps {
    projection?: string | (() => unknown);
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
    [key: string]: unknown;
  }

  export interface GeographiesProps {
    geography: string | Record<string, unknown> | string[];
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
    [key: string]: unknown;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    [key: string]: unknown;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    [key: string]: unknown;
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
