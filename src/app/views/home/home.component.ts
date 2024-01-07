import { Component } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Website } from '../../model/website.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  html5Resource: Resource = {
    title: 'HTML 5',
    website: [
      {
        title: 'HTML5 Reference by MDN',
        message:
          "You don't need to know every HTML element. I just use this excellent reference all the time.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
      },
      {
        title: 'HTML Entity Reference by CSS-Tricks',
        message:
          'Super useful reference, gives you HTML entity name, numeric code, hex code and ISO code.',
        url: 'https://css-tricks.com/snippets/html/glyphs/',
      },
    ],
  };

  usefulAPIsResource: Resource = {
    title: 'Useful APIs',
    website: [
      {
        title: 'Web Speech API',
        message: 'Create Web to Speech ',
        url: 'https://github.com/mdn/dom-examples/blob/main/web-speech-api/index.html',
      },
      {
        title: 'Over API',
        message: 'Cheat sheets for most popular programming languages',
        url: 'https://overapi.com/',
      },
      {
        title: 'Envato Tuts',
        message: 'Free coding tutorials for beginners',
        url: 'https://tutsplus.com/',
      },
      {
        title: '100 Days of CSS',
        message: 'Some snippets of code that can be copied',
        url: 'https://100dayscss.com/',
      },
    ],
  };

  css3Resource: Resource = {
    title: 'CSS 3',
    website: [
      {
        title: 'CSS3 Reference by MDN',
        message:
          "As with HTML, you don't need to know every CSS property. Use this reference instead.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        title: 'CSS3 Reference by Codrops',
        message:
          'Another excellent CSS reference, this time from Codrops. Make sure to check this one out, too.',
        url: 'https://tympanus.net/codrops/css_reference/',
      },
      {
        title: 'Can I Use?',
        message:
          'Up-to-date browser support tables for front-end technologies on desktop and mobile browsers.',
        url: 'https://caniuse.com/',
      },
      {
        title: '30 CSS Selectors by Tutplus',
        message:
          'I find myself using this handy list of the 30 most important CSS selectors from Tutplus all the time.',
        url: 'https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048',
      },
      {
        title: 'CSS for People Who Hate CSS',
        message:
          'Excellent guide on how to write better, cleaner and more reusable CSS code.',
        url: 'https://www.sitepoint.com/css-for-people-who-hate-css/',
      },
      {
        title: 'Clippy',
        message:
          'A small tool to help you use the new and powerful clip-path property.',
        url: 'https://bennettfeely.com/clippy/',
      },
      {
        title: 'CSS Easing Functions',
        message:
          'An amazing collection of easing functions to be used in CSS transitions and animations.',
        url: 'https://easings.net/',
      },
      {
        title: 'Fancy Border Radius',
        message: 'Generate custom border radius code',
        url: 'https://9elements.github.io/fancy-border-radius',
      },
      {
        title: 'Cubic Bezier ',
        message: 'Generate custom cubic-bezier code',
        url: 'https://cubic-bezier.com/',
      },
      {
        title: 'UIVerse',
        message: 'Generate custom UIVerse code',
        url: 'https://uiverse.io/',
      },
      {
        title: 'CSSBud Glow Generator',
        message: 'Generate custom glow generator code',
        url: 'https://cssbud.com/css-generator/css-glow-generator/',
      },
      {
        title: 'Transition style',
        message: 'Generate custom transition code',
        url: 'https://www.transition.style/',
      },
      {
        title: 'Gradient Magic',
        message: 'Generate custom gradient code',
        url: 'https://www.gradientmagic.com/',
      },
      //
    ],
  };

  javascriptResource: Resource = {
    title: 'JavaScript',
    website: [
      {
        title: 'JavaScript Reference by MDN',
        message:
          'Another reference by MDN, this one is for JavaScript. This is pretty advanced stuff.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      },
      {
        title: 'JavaScript Operator Precedence Table',
        message:
          'Very handy cheatsheet to determine which JavaScript operators are evaluated first.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence',
      },
      {
        title: 'JavaScript Event Reference',
        message:
          'Handy reference list of all DOM events with explanations, nicely categorized.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Events',
      },
      {
        title: 'ES6+ Browser Compatibility Table',
        message:
          'Check out all the new ES6+ features supported and their browser support.',
        url: 'https://kangax.github.io/compat-table/es6/',
      },
      {
        title: 'DOM Manipulation Reference',
        message:
          'Called "You Might Not Need jQuery", but I use this as a complete DOM manipulation reference.',
        url: 'https://youmightnotneedjquery.com/',
      },
      {
        title: 'JavaScript KeyCodes Reference',
        message:
          'Get keyboard codes, unicodes, and keycodes. Vital reference for keypress event handling.',
        url: 'https://keycode.info/',
      },
      {
        title: 'Principles of Writing Good JavaScript',
        message:
          "While I don't follow this 100%, it's good to have a style guide to write better code.",
        url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction',
      },
      {
        title: 'JavaScript Design Patterns',
        message:
          'For more advanced developers: learn all common JavaScript design patterns. Perfect reference.',
        url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      },
    ],
  };

  fontResource: Resource = {
    title: 'typography',
    website: [
      {
        title: 'Google Fonts',
        message:
          'The #1 resource for free and easy-to-use webfonts. Has a huge library of fonts.',
        url: 'https://fonts.google.com/',
      },
      {
        title: 'Fontsquirrel',
        message:
          'The best, 100% free fonts for commercial use. Another well-known huge font library.',
        url: 'https://www.fontsquirrel.com/',
      },
      {
        title: 'The 100 Best Free Fonts by Creative Bloq',
        message:
          'List of free fonts, from vintage-inspired typefaces to slab serifs, for a range of projects.',
        url: 'https://www.creativebloq.com/graphic-design-tips/best-free-fonts-for-designers-1233380',
      },
      {
        title: 'Font ninja extension',
        message: 'Extension use to check the fonts in the current screen',
        url: 'https://chromewebstore.google.com/detail/eljapbgkmlngdpckoiiibecpemleclhh',
      },
      // Add more dynamic posts as needed
    ],
  };

  colorResources: Resource = {
    title: 'Colors',
    website: [
      {
        title: 'Open Color',
        message:
          'An open-source color scheme, optimized for UI. My go-to resource to choose colors from scratch.',
        url: 'https://yeun.github.io/open-color/',
      },
      {
        title: 'Tailwind Colors',
        message:
          'Another excellent and popular set of color palettes. Great selection of colors for all your projects.',
        url: 'https://tailwindcss.com/docs/customizing-colors',
      },
      {
        title: 'Flat UI Colors',
        message:
          'A good starting point for choosing a flat design color for your next project.',
        url: 'https://flatuicolors.com/',
      },
      {
        title: 'Material Palette',
        message:
          'Yet another set of colors, inspired in material design. Generate and download your palette.',
        url: 'https://www.materialpalette.com/',
      },
      {
        title: 'Colorhunt Palettes',
        message:
          "Don't know what colors to use for your website? Colorhunt helps you with beautiful color palettes.",
        url: 'https://colorhunt.co/',
      },
      {
        title: 'LOL Colors Palettes',
        message:
          'Curated color palettes inspiration. Another source for great color palettes.',
        url: 'https://www.webdesignrankings.com/resources/lolcolors/',
      },
      {
        title: 'UI Gradients',
        message:
          'Collection of beautiful color gradients for you to choose from and export to your project.',
        url: 'https://uigradients.com/',
      },
      {
        title: 'Paletton',
        message:
          'A very popular tool which allows you to create color combinations that play well together.',
        url: 'https://paletton.com/',
      },
      {
        title: 'Tint and Shade Generator',
        message:
          'Easily create lighter and darker versions of any base color. Perfect for hovers, borders, and gradients.',
        url: 'https://maketintsandshades.com/',
      },
      {
        title: '0to255',
        message: 'Another helpful tool that generates variations of colors.',
        url: 'https://www.0to255.com/',
      },
      {
        title: 'Coolors Contrast Checker',
        message:
          'Tool to check whether two colors have a good contrast ratio. Essential for building accessible websites!',
        url: 'https://coolors.co/contrast-checker',
      },
      {
        title: 'Pigment Shape Factory',
        message: 'Tool to make pigments / color combinations',
        url: 'https://pigment.shapefactory.co/',
      },
      {
        title: 'Creatsy',
        message: 'Export PSD files of mock up images',
        url: 'https://creatsy.com/',
      },
      // Add more color references as needed
    ],
  };

  inspirationResource: Resource = {
    title: 'Inspiration',
    website: [
      {
        title: 'Httpster',
        message: 'Inspirations for designs & fonts',
        url: 'https://httpster.net/',
      },
      {
        title: 'One page Love',
        message: 'Inspirations for one page web pages',
        url: 'https://onepagelove.com/',
      },
      {
        title: 'Godly Websites',
        message: 'Inspirations for cool websites',
        url: ' https://godly.website/',
      },
      {
        title: 'Mobbin',
        message: 'Inspirations for IOS apps',
        url: 'https://mobbin.com/browse/ios/apps',
      },
      {
        title: 'Design methods ',
        message: 'Design techniques explained',
        url: 'https://www.designmethods.co.uk/',
      },
      {
        title: 'Bootstrapmade',
        message: 'Ready-made designs in bootstrap',
        url: 'https://bootstrapmade.com/',
      },
      {
        title: 'Footer design',
        message: 'Inspirations for footer',
        url: 'https://www.footer.design/',
      },
      {
        title: 'neumorphism',
        message: 'Design cards shadow / intensity',
        url: 'https://neumorphism.io/#e0e0e0',
      },
      {
        title: 'Cofolios',
        message: 'Inspiration for portfolios from developers in best companies',
        url: 'https://www.cofolios.com/',
      },
      {
        title: 'Learn Anything',
        message: 'Type to learn about what you want to search',
        url: 'https://learn-anything.xyz/',
      },
      {
        title: 'Landing pages explained',
        message: 'Learn about landing pages',
        url: 'https://landingpagesexplained.com/',
      },
      {
        title: 'Image downloader',
        message: 'Extension that downloads all the images from your screen',
        url: 'https://chromewebstore.google.com/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj',
      },
      //
    ],
  };

  AIResource: Resource = {
    title: 'AI',
    website: [
      {
        title: 'ChatGPT',
        message: 'Most popular AI tool',
        url: 'https://chat.openai.com/',
      },
      {
        title: 'Forefront.ai',
        message: 'Can use different AIs other than chatgpt ',
        url: 'https://forefront.ai',
      },
      {
        title: 'Write Sonic AI',
        message: 'Chat gpt with google search integration ',
        url: 'https://writesonic.com/chat',
      },
      //
    ],
  };

  AnimationReferences: Resource = {
    title: 'Animations',
    website: [
      {
        title: 'hover.css',
        message: 'Hover animate tests',
        url: 'https://coolors.co/contrast-checker',
      },
      {
        title: 'animista',
        message: 'Animate boxes ',
        url: 'https://animista.net/',
      },
      {
        title: 'Hamburger animation design',
        message: 'Collection of hamburgers',
        url: 'https://jonsuh.com/hamburgers/',
      },
      {
        title: 'Animate.css',
        message: 'Collection of Animations for text',
        url: 'https://animate.style/',
      },
      {
        title: 'UI Ball',
        message: 'Loading logo library',
        url: 'https://uiball.com/ldrs/',
      },
    ],
  };

  IconResource: Resource = {
    title: 'Icons',
    website: [
      {
        title: 'Basicons',
        message: 'Basic Icons',
        url: 'https://basicons.xyz/ ',
      },
      {
        title: 'The noun project',
        message: 'Detailed icons / photos that has water mark ',
        url: 'https://thenounproject.com/',
      },
      {
        title: 'lordicon',
        message: 'Animated Icons',
        url: 'https://lordicon.com/',
      },
      {
        title: 'Bootstrap Icons',
        message: 'Basic Icons',
        url: 'https://icons.getbootstrap.com/',
      },
      //
    ],
  };

  databaseResource: Resource = {
    title: 'Database',
    website: [
      {
        title: 'Firebase ',
        message: 'NoSQL',
        url: 'https://firebase.google.com/',
      },
      {
        title: 'Cockroach DB',
        message: 'NoSQL',
        url: 'https://www.cockroachlabs.com/',
      },
      {
        title: 'Turso',
        message: 'NoSQL',
        url: 'https://turso.tech/',
      },
    ],
  };

  hostingResource: Resource = {
    title: 'Web Hosting',
    website: [
      {
        title: 'Tiiny host',
        message: 'Quick hosting for sites less than 3mb',
        url: 'https://tiiny.host/',
      },
      {
        title: 'Heroku',
        message: 'Famous hosting site',
        url: 'https://www.heroku.com/',
      },
      {
        title: 'Netlify',
        message: 'Hosting site for frontend',
        url: 'https://www.netlify.com/',
      },
      {
        title: 'Railway',
        message: 'Hosting site for backend',
        url: 'https://railway.app/',
      },
    ],
  };

  containerResource: Resource = {
    title: 'Containers',
    website: [
      {
        title: 'Portainer',
        message: 'Deploy containers',
        url: 'https://www.portainer.io/',
      },
    ],
  };
}
