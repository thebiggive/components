# biggive-main-menu



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                                                    | Type      | Default                           |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------------------- |
| `blogUrlPrefix`        | `blog-url-prefix`         |                                                                                                                                | `string`  | `'https://biggive.org'`           |
| `donateUrlPrefix`      | `donate-url-prefix`       |                                                                                                                                | `string`  | `'https://donate.biggive.org'`    |
| `experienceUrlPrefix`  | `experience-url-prefix`   |                                                                                                                                | `string`  | `'https://community.biggive.org'` |
| `isLoggedIn`           | `is-logged-in`            | Whether the current user is logged in (i.e. is assumed to have a valid JWT). They get links to some extra content if they are. | `boolean` | `false`                           |
| `myAccountFlagEnabled` | `my-account-flag-enabled` |                                                                                                                                | `boolean` | `false`                           |


## Events

| Event           | Description | Type                |
| --------------- | ----------- | ------------------- |
| `logoutClicked` |             | `CustomEvent<void>` |


## Methods

### `closeMobileMenuFromOutside() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [biggive-misc-icon](../biggive-misc-icon)
- [biggive-social-icon](../biggive-social-icon)

### Graph
```mermaid
graph TD;
  biggive-main-menu --> biggive-misc-icon
  biggive-main-menu --> biggive-social-icon
  style biggive-main-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
