---
layout: side_drawer.liquid
options: mdl highlight ext-links
theme: indigo-deep_purple
tags: docs
group: docs
order: 30
coverPreview: https://picsum.photos/seed/docs=74/256/256
title: Material Design components
description: Rendering Material Design components using <code>zx</code> short code
icon: smart_button
keywords:
- Material
- Design
- Light
- MDL
- Short
- Codes
- Liquid
- Tags
---

This web starter template includes [Material Design Lite](https://getmdl.io/components/) components, implemented using
*zuix.js*, and that can be also rendered using `zx` short code tags.   


## Material Design tags

<a name="buttons"></a>
### `button`

Usage: {% raw %}
```liquid
{% zx 'button' '<link>' ['<type>' ['<classes>']] %}
<content>
{% endzx %}
```
{% endraw %}

Where `'<type>'` can be one of the following:
- `flat`
- `raised`
- `fab`

and `'<classes>'` can be one of the following values:
- `colored`
- `accent`
- `primary`
- `mini-fab` (can be added only if *type* is `fab`)


#### Examples

Basic button

{% raw %}
```liquid
{% zx 'button' '#test-link-1' %}
Basic
{% endzx %}
```
{% endraw %}

{% layout 'row center-center' %}
  {% zx 'button' '#test-link-1' %}
  Basic
  {% endzx %}
{% endlayout %}


Colored button

{% raw %}
```liquid
{% zx 'button' '#test-link-1' 'raised' 'colored' %}
Colored
{% endzx %}
```
{% endraw %}

{% layout 'row center-center' %}
  {% zx 'button' '#test-link-1' 'raised' 'colored' %}
  Colored
  {% endzx %}
{% endlayout %}


Flat button

{% raw %}
```liquid
{% zx 'button' '#test-link-2' 'flat' %}
Click Me
{% endzx %}
```
{% endraw %}

{% layout 'row center-center' %}
  {% zx 'button' '#test-link-2' 'flat' 'accent' %}
  Click Me
  {% endzx %}
{% endlayout %}


Floating action buttons

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'accent' %}
mail
{% endzx %}
```
{% endraw %}

{% layout 'row center-center' %}
  {% zx 'button' '#test-link-3' 'fab' 'accent' %}
  mail
  {% endzx %}
{% endlayout %}


{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
home
{% endzx %}
```
{% endraw %}

{% layout 'row center-center' %}
  {% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
  home
  {% endzx %}
{% endlayout %}


<a name="menu_button"></a>
### `menu`

Usage:
{% raw %}
```liquid
{% zx 'menu' %}
<config>
{% endzx %}
```
{% endraw %}

#### Example

{% raw %}
```yaml
{% zx 'menu' %}

items:

- title: Option 1
  link: "#test1"

- title: Option 2
  link: "#test2"

- title: Option 3
  link: "#test3"

button:
  type: icon
  classes: accent

{% endzx %}
```
{% endraw %}

#### Result

{% zx 'menu' %}
items:
- title: Option 1
  link: "#test1"
- title: Option 2
  link: "#test2"
- title: Option 3
  link: "#test3"
button:
  type: icon
  classes: accent
{% endzx %}

The `button.type` field can be one of the following:
- `icon`
- `fab`

and `button.classes` can be:
- `colored`
- `accent`
- `primary`
- `mini-fab` (can be added only if *button.type* is `fab`)


<a name="cards"></a>
### `card`

Usage:

{% raw %}
```liquid
{% zx 'card' '<type>' '<title>' '<image_url>' '<link_url>' '<link_text>' %}
<description>
{% endzx %}
```
{% endraw %}

Where `'<type>'` can be one of the following:
- `image`
- `square`
- `default`


#### Example

{% raw %}
```liquid
{% layout 'rows center-spread' %}

  {% zx 'card' 'image' 'The bridge' 'https://picsum.photos/id/392/256/256' '#link-to-somewhere' %}
  {% endzx %}

  {% zx 'card' 'square' 'Sweet mornings' 'https://picsum.photos/id/110/320/176' '#link-to-somewhere' 'Show me' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}
  
  {% zx 'card' 'default' 'Blind texts' 'https://picsum.photos/id/33/420/172' '#link-to-somewhere' 'Show me' %}
  Far far away, behind the word mountains, far from the countries
  Vokalia and Consonantia, there live the blind texts. 
  {% endzx %}

{% endlayout %}
```
{% endraw %}


{% layout 'rows center-spread' 'style="overflow-x:hidden"' %}

  {% zx 'card' 'image' 'The bridge' 'https://picsum.photos/id/392/256/256' '#link-to-somewhere' %}
  {% endzx %}
    
  {% zx 'card' 'square' 'Sweet mornings' 'https://picsum.photos/id/110/320/176' '#link-to-somewhere' 'Take me there' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}
  
  {% zx 'card' 'default' 'Blind texts' 'https://picsum.photos/id/33/420/172' '#link-to-somewhere' 'Show me' %}
  Far far away, behind the word mountains, far from the countries
  Vokalia and Consonantia, there live the blind texts.
  {% endzx %}

{% endlayout %}


<!-- Menu Overlay -->


{% zx 'menu-overlay' %}

items:

- title: Buttons
  link: javascript:navigateTo('buttons')
  icon: smart_button

- title: Menu button
  link: javascript:navigateTo('menu_button')
  icon: menu

- title: Cards
  link: javascript:navigateTo('cards')
  icon: dashboard

settings:
- name: lazy
  value: false
options:
- name: context-id
  value: menu-overlay
- name: position
  value: center

{% endzx %}
