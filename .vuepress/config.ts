import { defineUserConfig } from 'vuepress'

const { defaultTheme } = require('@vuepress/theme-default')

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress - the test',
  description: 'Just playing around',
})

module.exports = {
  theme: defaultTheme({
    // set config here
  }),
}