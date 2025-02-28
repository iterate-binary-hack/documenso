import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

export const track = (event: string, properties?: Record<string, unknown>) => {
  mixpanel.track(event, properties);
};

export const identify = (id: string) => {
  mixpanel.identify(id);
};

export const reset = () => {
  mixpanel.reset();
};
