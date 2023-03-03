# Intuitive Flexbox demo

## Installation

```bash
   yarn add intuitive-flexbox
```

## Implementation

```typescript
import { HBox, VBox } from "intuitive-flexbox";
export default function HomePage() {
  return (
    <VBox className="h-screen bg-black py-10 text-white">
      <h1 className="mb-2">This is a VBox</h1>
      <HBox className="bg-blue-500 bg-opacity-50 py-2">
        This is an HBox
        <div className="mx-2 bg-red-500 px-2">with</div>
        <div className="mx-2 bg-green-500 px-2">multiple items</div>
      </HBox>
      <HBox className="bg-yellow-500 bg-opacity-50">This another HBox</HBox>
    </VBox>
  );
}
```

## Props

### VBox

| Prop name | Type      | Default value | Description                                 |
| --------- | --------- | ------------- | ------------------------------------------- |
| children  | ReactNode | -             | The content of the component                |
| className | string    | -             | Additional CSS class name(s)                |
| id        | string    | -             | The id attribute of the component           |
| center    | boolean   | false         | Whether to horizontally center the children |
| vcenter   | boolean   | false         | Whether to vertically center the children   |
| hFull     | boolean   | false         | Whether to make the component full width    |

### HBox

| Prop name    | Type                      | Default value | Description                                        |
| ------------ | ------------------------- | ------------- | -------------------------------------------------- |
| children     | `ReactNode`               | -             | The content of the component                       |
| className    | `string`                  | -             | Additional CSS class name(s)                       |
| id           | `string`                  | -             | The id attribute of the component                  |
| wFull        | `boolean`                 | `false`       | Whether to make the component full width           |
| hFull        | `boolean`                 | `false`       | Whether to make the component full height          |
| spaceBetween | `boolean`                 | `false`       | Whether to add space between the children          |
| center       | `boolean`                 | `false`       | Whether to horizontally center the children        |
| vcenter      | `boolean`                 | `false`       | Whether to vertically center the children          |
| style        | `Record<string, unknown>` | -             | Additional inline styles to apply to the component |
| wrap         | `boolean`                 | `false`       | Whether to wrap the children onto multiple lines   |

## Mad Props

  <p>to Theodorus Clarence for this: <a href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter"></a></p>
