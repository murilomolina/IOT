declare module "react-big-calendar" {
  import { ComponentType, CSSProperties } from "react";
  import { Locale } from "date-fns";

  export type DateLocalizer = {
    formats: Record<string, string>;
    firstOfWeek: (culture: string) => number;
    format: (value: Date, format: string, culture: string) => string;
    parse: (value: string, format: string, culture: string) => Date;
  };

  export type Event = {
    title: string;
    allDay?: boolean;
    start: Date;
    end: Date;
    [key: string]: unknown;
  };

  export interface CalendarProps {
    localizer: DateLocalizer;
    events: Event[];
    startAccessor: string | ((event: Event) => Date);
    endAccessor: string | ((event: Event) => Date);
    titleAccessor?: string | ((event: Event) => string);
    allDayAccessor?: string | ((event: Event) => boolean);
    views?: string[] | { [view: string]: boolean };
    defaultView?: string;
    style?: CSSProperties;
    eventPropGetter?: (
      event: Event | CustomEvent,
      start: Date,
      end: Date,
      isSelected: boolean
    ) => {
      style?: CSSProperties;
      className?: string;
    };
    components?: {
      event?: ComponentType<{ event: Event }>;
    };
    [key: string]: unknown;
  }

  export const Calendar: ComponentType<CalendarProps>;

  export function dateFnsLocalizer(config: {
    format: (date: Date, format: string, options?: { locale?: Locale }) => string;
    parse: (dateString: string, format: string, referenceDate: Date, options?: { locale?: Locale }) => Date;
    startOfWeek: (date: Date, options?: { locale?: Locale }) => Date;
    getDay: (date: Date) => number;
    locales: Record<string, Locale>;
  }): DateLocalizer;
}
