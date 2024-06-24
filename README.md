# Pattern - component encapsulation

Most applications will use a component library (MUI, Mantine, antd, etc). Building custom components is time-consuming and likely to result in components that are missing standard accessibility features such as keyboard control.

## Problems

Component libraries are extremely feature rich and very capable. However there will always be problems when using these libraries. The most common problems are:

- Differences between the design and the component library
  - Visual differences such as coloring. This is typically solved by using theming.
  - Behavior differences (missing features or features not working as needed)
- Bugs in the component library
- Component library becomes unmaintained
- Keeping up with constant library changes
- Security problems

## Solutions

The most common and resilient way to reduce friction between the application and a component library is to provide an abstraction. Instead of using the library components directly, create a wrapper component that exposes only the bare minimum needed properties.

This has the following benefits:

- Ensures consistency
- Can simplify and unify usage
- Enforce user experience guidelines established by the design.  Open-source component libraries are too flexible.  They allow developers to create components that don't follow best practices or are inconsistent with company design principles.
- Speeds up component development and testing
- Allows global changes of all usages in the application
- Potentially allows global workarounds for library bugs
- In extreme circumstances, it allows replacement of a component with a custom solution or a different library
- Open-source component libraries are often abandoned or completely reworked once / year.  It requires significant effort for the development team to keep up-to-date.  This introduces bugs.  **This often forces the development team to prioritize upgrades over new features.**

Examples:

### Labels / Typography

TODO

### Custom Button

```jsx
<Button label={'My Button'} icon={"Search"} variant={'primary'} />
```

#### MUI Button

```jsx
<Button background={"red"} color={"white"} variant="contained">
  <label style={{fontSize: "0.75rem", fontWeight: 400, marginRight: 8}}>My Button</label>
  <SearchIcon style={{width: 32, height: 32}} />
</Button>
```

MUI Button has the following problems:

- every button usage has the copy/paste all of the code above
- any changes will have to be updated to every usage
- no focus or hover state
- label does not truncate to a max width with ellipses

The custom button also nicely maps to the design
Primary variant - "call to action", etc
Secondary variant - "cancel" button, etc
Warn variant - "red" button to inform uses of destructive actions

## Using Storybook to develop common components

### Advantages

Reduces development time by providing easy methods to test all states
Provides auto-generated documentation
Encourages standardization and simplified props
Allows easy testing without requiring developers to navigate complex flows
Has methods for switching themes
Allows responsive display testing
Accessibility testing

## Disadvantages

Storybook has many dependencies and changes often
Takes time to develop stories
