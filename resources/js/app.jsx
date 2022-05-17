import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
  color: '#B280FF',
  showSpinner: false,
});

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  title: (title) => `${title} - Nanda-san`,
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
