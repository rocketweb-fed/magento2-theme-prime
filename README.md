# RW Prime - Magento 2 boilerplate theme
RW Prime theme is based on Magento Blank and includes our most common customizations that we make on the majority of our projects. 

> NOTE: This project is in constant development so use it with caution.

![RW Prime](media/preview.png)

## Features
* New simplified header layout
* Sticky header (can be enabled/disabled via layout)
* New CSS grid layout and flexbox utilities
* Refactored mobile menu - removed additional tabs, included search and account links 
* UI reference page with commonly used user interface elements (buttons, forms, typography, etc.), available at `/index.php/ui`
* Included Slick carousel for custom banner and product carousels (requires WeltPixel_OwlCarouselSlider extension)
* Lazy loading product images on product listing pages and in sliders (can be enabled/disabled via layout)
* Lazy loading of carousel banners - added support for responsive and background images
* Support for lazy loading of scripts, stylesheets, widgets via lazysizes unveilhooks plugin
* Updated layered navigation - added filter collapse, limit the number of visible options by default, simplified active filters section
* Account dropdown containing dynamic customer actions
* Removed redundant UI elements from product listing pages
* Cart and checkout UI improvements 
* CSS optimizations - async loading of main css files, preloading critical CSS on HP, PDP, PLP
* UI optimizations on PDP - moved title to product details column, add qty +/- buttons, included social sharing buttons
* Address autocomplete functionality in address forms in checkout
* Minicart opens automatically when product is added to cart
* Updated footer layout using flexbox
* Styled form elements (checkboxes, radios, dropdowns etc.)
* Included commonly used icons as icon-font
* Added support for WeltPixel OwlCarouselSlider extension
* Added support for Magefan Blog extension
* Bunch of handy mixins 
* and more...

> If you want easier front-end development with automatic less/js linting, compilation and more checkout our [magento2-gulfile](https://github.com/rocketweb-fed/magento2-gulpfile).

## Installation
Install using Composer
```
$ composer require rocketweb/theme-frontend-prime
```

Theme package comes bundled with two modules: UiCore and CheckoutEnhancement. You'll need to install them using Magento CLI:
```
$ bin/magento module:enable RocketWeb_UiCore
$ bin/magento module:enable RocketWeb_CheckoutEnhancement
$ bin/magento module:enable Staempfli_ImageResizer
$ bin/magento setup:upgrade
```

> To test if the theme has been installed correctly you can go to **Admin > Content > Design > Themes**. You should see RocketWeb/prime as one of the available themes.

## Supported modules
RW Prime is compatible with the following third-party modules that we highly recommend to install to take full advantage of the theme features:
- [WeltPixel_OwlCarouselSlider](https://www.weltpixel.com/resources/OWLCarouselSlider/User-Guide-WeltPixel-Banner-Slider-OWL-Carousel-Magento2.html)
- [Magefan_Blog](https://magefan.com/magento2-blog-extension)

## Usage
To start working with the Prime theme make sure to create your own custom theme that inherits from RocketWeb/prime. You can put all of your customizations in there but make sure not to modify the Prime theme files as your changes will be wiped out when the theme has been updated.

Here's a sample theme.xml file for your own theme:
```
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd">
    <title>Your Own Theme</title>
    <parent>RocketWeb/prime</parent>
    <media>
        <preview_image>media/preview.jpg</preview_image>
    </media>
</theme>
```

## Development
This theme is in constant development. If you want to contribute by fixing bugs or adding new features use our [github repo](https://github.com/rocketweb-fed/magento2-theme-prime). Just fork the repository, push your changes and create a PR. Once your submission is reviewed and accepted we'll merge it to our develop branch and ship with the next release.


## Documentation
Documentation can be found in [this project's wiki](https://github.com/rocketweb-fed/magento2-theme-prime/wiki)


## License
This project is licensed under **GNU General Public License v3.0**