---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links
tags: docs
group: docs
order: 20
coverPreview: https://picsum.photos/seed/docs!zx-tags/256/256
title: Components short codes
description: Rendering zKit and custom components using <code>zx</code> short code 
icon: read_more
pubDate: 2022-04-05 04:01:41
keywords:
- Zx
- Tags
- menu
- overlay
- media
- browser
- gallery
---

Using `zx`'s short code's tags it is possible to render components and fragments without writing any HTML or JavaScript code.


## Components tags

<a name="menu_overlay"></a>
### `menu-overlay`

This tag renders zKit's *Menu Overlay* component. It will show a floating menu button visible at the bottom of the page
and that automatically shows/hides when the page is scrolled. The button can be positioned on the left, center or right
using the `position` option.  

#### Example

{% raw %}
```yaml
{% zx 'menu-overlay' %}

items:

- title: Links

- title: zKit
  link: https://zuixjs.github.io/zkit/content/components/menu-overlay/
  icon: link

- title: zuix.js
  link: https://zuixjs.org
  icon: link

- title: Components

- title: Menu overlay
  link: "#menu_overlay"
  icon: list

- title: Media Browser
  link: "#media_browser"
  icon: video_library

options:

- name: position
  value: right

- name: button-color
  value: seagreen

- name: icon-color
  value: "#a7ff00"

settings:

- name: lazy
  value: false

{% endzx %}
```
{% endraw %}


{% zx 'menu-overlay' %}

items:

- title: Links

- title: zKit
  link: https://zuixjs.github.io/zkit/content/components/menu-overlay/
  icon: link

- title: zuix.js
  link: https://zuixjs.org
  icon: link

- title: Components

- title: Menu overlay
  link: javascript:navigateTo('menu_overlay')
  icon: list

- title: Media Browser
  link: javascript:navigateTo('media_browser')
  icon: video_library

options:
- name: position
  value: center
- name: button-color
  value: seagreen
- name: icon-color
  value: "#a7ff00"

settings:
- name: lazy
  value: false

{% endzx %}


For full options list see `menu-overlay` [documentation](https://zuixjs.github.io/zkit/content/components/menu-overlay/) on *zKit* website.


<a name="media_browser"></a>
### `media-browser`

This tag renders zKit's *Media Browser* component that can be used as a gallery of images and videos. Featuring
inline/full screen modes, automatic video play/pause and much more.

#### Example

```yaml
{%- raw -%}
{% zx 'media-browser' %}

media:

- type: image
  title: Some title
  description: Description of this image
  preview: https://picsum.photos/seed/docs-4/533/300
  url: https://picsum.photos/seed/docs-4/1600/900
  interval: 8000

- type: image
  title: Another title
  description: Second image description
  preview: https://picsum.photos/seed/docs-3/533/300
  url: https://picsum.photos/seed/docs-3/1600/900

- type: video
  preview: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg
  url: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  interval: 15000

- type: image
  preview: https://picsum.photos/seed/docs-1/533/300
  url: https://picsum.photos/seed/docs-1/1600/900

- type: video-yt
  preview: https://img.youtube.com/vi/IdtM6OPdaio/2.jpg
  url: IdtM6OPdaio
  interval: 15000

- type: image
  title: Yet another title
  description: One more image description 😇
  preview: https://picsum.photos/seed/docs-2/533/300
  url: https://picsum.photos/seed/docs-2/1600/900

options:

- name: slide
  value: 5000

- name: inline
  value: true

{% endzx %}
{% endraw -%}
```

#### Result

{% zx 'media-browser' %}
media:
- type: image
  title: Some title
  description: Description of this image
  preview: https://picsum.photos/seed/docs-4/533/300
  url: https://picsum.photos/seed/docs-4/1600/900
  interval: 8000
- type: image
  title: Another title
  description: Second image description
  preview: https://picsum.photos/seed/docs-3/533/300
  url: https://picsum.photos/seed/docs-3/1600/900
- type: video
  preview: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg
  url: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  interval: 15000
- type: image
  preview: https://picsum.photos/seed/docs-1/533/300
  url: https://picsum.photos/seed/docs-1/1600/900
- type: video-yt
  preview: https://img.youtube.com/vi/IdtM6OPdaio/2.jpg
  url: https://youtu.be/IdtM6OPdaio
  interval: 15000
- type: image
  title: Yet another title
  description: One more image description 😇
  preview: https://picsum.photos/seed/docs-2/533/300
  url: https://picsum.photos/seed/docs-2/1600/900
options:
- name: slide
  value: 5000
- name: inline
  value: true
settings:
- name: lazy
  value: true
- name: field
  value: mediaBrowser1
{% endzx %}
<script>
zuix.field('mediaBrowser1')
  .on({
    'fullscreen:open': function() {
      zuix.field('drawer').hide();
      zuix.field('header').hide();
    },
    'fullscreen:close': function() {
      zuix.field('drawer').show();
      zuix.field('header').show();
    }
  });
</script>

##

For full options list see `media-browser` [documentation](https://zuixjs.github.io/zkit/content/components/media-browser/) on *zKit* website.
