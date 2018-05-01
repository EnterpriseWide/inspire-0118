---
layout: base__page_docs
title: Sections
permalink: /sections/
breadcrumbs: false
sections:
  - title: Cards
    children:
      - title: Cards
        url: components/cards/cards.html
        files:
          - _includes/components/cards/cards.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Section is a basic collection of 2-3 card components without any advanced behavior. Content should be kept to short paragraphs rather than length text columns since tall cards will appear too narrow.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }

      - title: Cards Slider
        url: components/cards/cards__slider.html
        files:
          - _includes/components/cards/cards__slider.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Slider Section will create a carousel of 2-3 cards.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown", default: "" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "2" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }
          - { name: "categories", label: "Component Categories", widget: "relation" }
          - { name: "date", label: "Component Date", widget: "datetime" }
          - { name: "author", label: "Component Author", widget: "relation" }

      - title: Cards Tabs
        url: components/cards/cards__tabs.html
        files:
          - _includes/components/cards/cards__tabs.html
          - _includes/components/cards/card.html
        desc: |-
          The Cards Tabs Component will create tabbable cards in groups of 2-3.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }
          - { name: "footer", label: "Section Footer", widget: "markdown" }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "columns", label: "Section Columns", widget: "select", options: [{label: "Two", value: "2"}, {label: "Three", value: "3"}], default: "3" }
          - { name: "flat", label: "Section Flat Appearance", widget: "boolean", default: "false" }

          # Component
          - { name: "title", label: "Component Header", widget: "string" }
          - { name: "body", label: "Component Body", widget: "markdown" }
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string" }

  - title: Text
    children:
      - title: Text
        url: components/text/text.html
        files:
          - _includes/components/text/text.html
        desc: |-
          The Text Section is the simplest way to add WYSIWYG content to the site.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }

      - title: Text Button
        url: components/text/text_button.html
        files:
          - _includes/components/text/text_button.html
        desc: |-
          This section contains a single WYSIWYG field and a button. It's best suited for a simple call to action.
        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "reverse_columns", label: "Section Reverse Columns", widget: "boolean", default: "false" }

          # Component
          - { name: "link", label: "Component Link", widget: "string" }
          - { name: "link_label", label: "Component Link Label", widget: "string", default: "Click me" }

      - title: Text Media
        url: components/text/text_media.html
        files:
          - _includes/components/text/text_media.html
        desc: |-
          This section provides a WYSIWYG field accompanied with an image, video (YouTube or Vimeo) or Google Map. Media will automatically open inside a lightbox when clicked. If no image is specified for video, the template will default to a still from that video.

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }
          - { name: "reverse_columns", label: "Section Reverse Columns", widget: "boolean", default: "false" }

          # Component
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "image_desc", label: "Component Image Description", widget: "string" }
          - { name: "link", label: "Component Link", widget: "string" }

  - title: Other
    children:
      - title: Affiliates
        url: components/affiliates.html
        files:
          - _includes/components/affiliates.html
        desc: |-
          This section is best suited for displaying a single row of small affiliate images - most commonly logos or sponsors. The section will accept any number of images and start stacking once they run out of room.

        fields:
          # Section
          - { name: "id", label: "Section Id", widget: "string" }
          - { name: "header", label: "Section Header", widget: "string" }
          - { name: "body", label: "Section Body", widget: "markdown", buttons: ["bold", "italic", "h2", "h3", "h4", "h5", "h6"] }

          # Section Modifiers
          - { name: "theme", label: "Section Theme", widget: "select" }
          - { name: "bg_image", label: "Section Background Image", widget: "image" }
          - { name: "fix_bg_image", label: "Section Background Image Fixed", widget: "boolean", default: "false" }
          - { name: "tint_bg", label: "Section Background Tinted", widget: "boolean", default: "false" }

          # Component
          - { name: "image", label: "Component Image", widget: "image" }
          - { name: "image_desc", label: "Component Image Description", widget: "string" }
          - { name: "link", label: "Component Link", widget: "string" }
---