# biggive-popup



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description                                                                            | Type         | Default    |
| --------------------- | --------- | -------------------------------------------------------------------------------------- | ------------ | ---------- |
| `modalClosedCallback` | --        | Function to execute when the modal is closed, whether by the user or programmatically. | `() => void` | `() => {}` |


## Methods

### `closeFromOutside() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openFromOutside() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [biggive-campaign-card-filter-grid](../biggive-campaign-card-filter-grid)
 - [biggive-cookie-banner](../biggive-cookie-banner)

### Graph
```mermaid
graph TD;
  biggive-campaign-card-filter-grid --> biggive-popup
  biggive-cookie-banner --> biggive-popup
  style biggive-popup fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
