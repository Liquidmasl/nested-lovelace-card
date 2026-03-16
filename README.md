# Nested Lovelace Card

![Version](https://img.shields.io/github/v/release/Liquidmasl/nested-lovelace-card)
![Downloads](https://img.shields.io/github/downloads/Liquidmasl/nested-lovelace-card/total)
![Stars](https://img.shields.io/github/stars/Liquidmasl/nested-lovelace-card)
![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)

**Nested Lovelace Card** is a custom Lovelace card for Home Assistant that lets you group multiple cards into a single sleek card, stacked vertically or horizontally.

![Showcase Card](https://user-images.githubusercontent.com/16443111/220773923-c28009d6-edfc-4ffd-9290-3e0c6e1acf73.png)

---

## About this fork

This is an actively maintained fork of the original [ofekashery/vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card), which has not seen updates in some time. Several bugs reported there have been fixed here.

The card element is still registered as `custom:vertical-stack-in-card` so **existing dashboards keep working without any changes**.

### Switching from the original

1. In HACS, add this repository as a custom repository:
   `https://github.com/Liquidmasl/nested-lovelace-card`
2. Install **Nested Lovelace Card** from there.
3. Remove the old **Vertical Stack In Card** entry.
4. Your existing dashboard YAML does not need to change.

---

## Configuration Options

| Name         | Type    | Default | Description                                       |
| ------------ | ------- | ------- | ------------------------------------------------- |
| `type`       | string  | N/A     | Must be `custom:vertical-stack-in-card`.          |
| `cards`      | list    | N/A     | List of cards to include.                         |
| `title`      | string  | None    | Optional. Title displayed at the top of the card. |
| `horizontal` | boolean | false   | Optional. Stack cards horizontally instead.       |
| `styles`     | object  | None    | Optional. Add custom CSS for advanced styling.    |

## Installation

### Via HACS (recommended)

1. Open HACS in Home Assistant.
2. Go to **Frontend** → three-dot menu → **Custom repositories**.
3. Add `https://github.com/Liquidmasl/nested-lovelace-card` as a **Lovelace** repository.
4. Search for "Nested Lovelace Card" and install it.

### Manual Installation

Download [`nested-lovelace-card.js`](https://github.com/Liquidmasl/nested-lovelace-card/releases/latest/download/nested-lovelace-card.js) into your `<config>/www` directory.

```bash
wget https://github.com/Liquidmasl/nested-lovelace-card/releases/latest/download/nested-lovelace-card.js
mv nested-lovelace-card.js /config/www/
```

#### Add resource reference

If you configure Lovelace via YAML, add a reference in your `configuration.yaml`:

```yaml
resources:
  - url: /local/nested-lovelace-card.js?v=1.0.1
    type: js
```

Or via the UI: **Settings** → **Dashboards** → **Resources** → **Add resource**:

- **URL:** `/local/nested-lovelace-card.js?v=1.0.1`
- **Resource type:** `JavaScript Module`

## Usage

```yaml
type: 'custom:vertical-stack-in-card'
title: My Card
cards:
  - type: glance
    entities:
      - sensor.temperature_sensor
      - sensor.humidity_sensor
      - sensor.motion_sensor
  - type: entities
    entities:
      - switch.livingroom_tv
      - switch.livingroom_ac
      - light.ambient_lights
```

## Acknowledgements

Thanks to [@ofekashery](https://github.com/ofekashery) for the original [vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card), and to [@ciotlosm](https://github.com/ciotlosm) and [@thomasloven](https://github.com/thomasloven) for their inspiration and contributions.
