import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// Gündüz: açık deniz mavisi. Gece: derin okyanus.
const { theme, problems } = makeColors({
  label: 'Okyanus',
  roles: { accent: '#1f7fa8', danger: '#c0443a', success: '#2e8a5a', warning: '#b7791f', pro: '#6b5fb5' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e1eff4',
        'surface-1': '#e9f4f8',
        'surface-2': '#f2f9fb',
        'text-primary': '#0f2a36',
        'text-secondary': '#2f4b57',
        'text-muted': '#4a6470',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0b1c26',
        'surface-1': '#10242f',
        'surface-2': '#152b37',
        'surface-3': '#19303d',
        'text-primary': '#e6f3f7',
        'text-secondary': '#bcd3dc',
        'text-muted': '#93adb8',
      },
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'okyanus', glass: { blur: 18, opacity: 0.62 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    if (e.props.scene !== 'okyanus') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Sandalda balık tutan turuncu maskot, dalgalı tatlı bir okyanus" isInteractive />
  })
}
