# Line Chart

Line Charts are ideal for displaying trends over time or comparing multiple data sets.

Here's a detailed guide on how to create a line chart with LiveGap charts.

## How to create and use a Line Chart

### Step 1: Create a Line Chart

To create a new Line Chart, click the `Make your Chart` button on the [LiveGap Charts Home screen](https://charts.livegap.com/) and then select `Line Chart` from the list of options presented.

This will open the Chart editor with the default line chart loaded.

You can load a different line chart from the `Gallery` by clicking the `SELECT CHART` button under the `CHART` tab in the right sidebar.

### Step 2: Add data to your chart

Add your data to your line chart using the spreadsheet at the bottom of the screen.

![Customize Chart](../assets/images/add-data.png)

<p align="center"><em>Customize chart in editor</em></p>

You may also import data from an existing spreadsheet (`.csv` file) by clicking the `DATA` tab in the header and then clicking `Import`.

### Step 3: Customize your Chart

Customize your chart using the various customization options in the right sidebar.

The [table](#customization-options) below describes what each option does.

<!-- !!! tip
    Swipe left on a mobile device to open the right sidebar. -->

### Step 4: Save your Chart

First, edit your chart's title and subtitle by clicking `Chart Title` and `Add SubTitle Here` or by using the `Text` tab in the right sidebar.

To save your chart locally to your device, click the download icon beneath your chart and choose your desired download option by clicking on one of the popup icons.

You can choose to save your chart as an Image, Video, or in HTML.

To save your chart online, click the `FILE` tab in the header and then click `Save Online` from the dropdown.

!!! tip
    Click `My Charts` under the `VIEW` tab in the header to open a chart previously saved online.

### Step 5: Export data (Optional)

If desired, export the data used to create the chart as a spreadsheet (`.csv` file) by clicking the `DATA` tab in the header and then clicking `Export`.

## Customization Options

### Chart

| **Option**         | **Type**          | **Function**                                                                                              |
|--------------------|-------------------|----------------------------------------------------------------------------------------------------------|
| **Gallery**        | Menu            | Opens the gallery, allowing you to select a from a range of pre-made chart templates.                                                    |
| **Chart Type**     | Dropdown          | Allows selection of the type of chart (e.g., Line Chart, Bar Chart, etc.).                                |
| **Link Type**      | Dropdown          | Determines how data points are connected (e.g., point to point, spline).                                  |
| **Width**          | Slider            | Adjusts the overall width of the chart.                                                                   |
| **Height**         | Slider            | Adjusts the overall height of the chart.                                                                  |
| **BackColor**      | Color Picker      | Changes the background color of the chart. Click the `+` button to add more colors.                                                                |
| **Canvas**         | Section     | Contains additional options for adjusting the canvas (padding, margin, color, border, etc.).              |
| **Border**         | Section            | Allows adding a border around the chart with customizable settings.                                        |
| **Box Shadow**     | Toggle            | Enables or disables a shadow effect around the chart.                                                   |
| **Format**     | Section            | Allows customization of how numbers are displayed on the chart.                                                    |

### Colors

| **Option**         | **Type**          | **Function**                                                                                              |
|--------------------|-------------------|----------------------------------------------------------------------------------------------------------|
| **Fill**           | Toggle            | Enables or disables the filling of the area under the lines in the chart with color.                      |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Fill style**    | Button        | Opens options to set the fill style for each line (between color, gradient, and pattern).                |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Color Picker**    | Button        | Opens a color picker to set the fill color.                |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Fill pattern**    | Dropdown        | Opens options to set the fill pattern type for each set of bars (only available when fill style is set to pattern)                 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Style**           | Button        | Opens the color scheme selection window.                   |
| **Stroke**         | Toggle            | Enables or disables the line that connects the data points on the chart.                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Colors**         | Color Picker      | Allows selection of colors for the lines on the chart.      |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Line Style**     | Dropdown          | Provides options to select different styles for the line (e.g., solid, dashed).                           |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Width**          | Slider            | Adjusts the thickness of the lines connecting the data points.                                             |
| **Points**         | Toggle            | Enables or disables the visibility of individual data points on the chart.                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Point Colors**   | Color Picker      | Allows selection of colors for the individual points on the chart.                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Radius**         | Slider            | Adjusts the size (radius) of the data points.                                                              |
| **Points Stroke**  | Toggle            | Enables or disables the stroke (border) around the individual data points.                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Stroke Colors**   | Color Picker      | Allows selection of colors for the individual lines on the chart.                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Stroke Style**   | Dropdown          | Provides options to select the style of the border around the data points (e.g., solid, dashed).           |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Stroke Width**   | Slider            | Adjusts the thickness of the stroke (border) around the individual data points.                            |

### In-Graph

| Option             | Type      | Function |
|--------------------|-----------|----------|
| **In-Graph Data**               | Toggle  | Toggle the display of in-graph data on or off. |
| **Type**               | Dropdown  | Selects the type of data to display in-graph, such as value, percentage, or label |
| **Position**           | Section   | Configuration options for the position of in-graph data. |
| **Padding X**          | Slider    | Adjusts horizontal padding of the in-graph text. |
| **Padding Y**          | Slider    | Adjusts vertical padding of the in-graph text. |
| **Align**              | Dropdown  | Sets horizontal alignment of the in-graph text. Options include left, center, and right. |
| **VAlign**             | Dropdown  | Sets vertical alignment of the in-graph text. Options include top, middle, and bottom. |
| **Rotate**             | Slider    | Adjusts the rotation angle of the in-graph text. |
| **BackgroundColor**    | Checkbox + Color pricker  | Enables a background color for the in-graph text. |
| **Border**             | Checkbox + Color picker  | Enables a border around the in-graph text and enables you to change its color. Click the `+` button to add seperate colors for each set of data points. |
| **Padding**            | Slider | Adjusts the padding of the in-graph text's bounding box. |
| **Font**               | Section   | Allows customization of the font settings for in-graph data. |
| **Font Family**        | Dropdown  | Selects the font family. Default is 'Open Sans'. |
| **Font Style**         | Icons     | Options to change the font color, or make the font bold or italic. Click the `+` button to add seperate colors for each set of data points. |
| **Font Size**          | Slider    | Adjusts the font size for in-graph text. |

### Legend

| Option               | Type                        | Function |
|----------------------|-----------------------------|----------|
| **Columns**           | Slider                      | Adjusts the number of columns in the legend. |
| **BlockSize**         | Slider                      | Modifies the size of each block of text and icons in the legend. |
| **Stroke Width**      | Input Field                 | Sets the width of the stroke around each legend block. |
| **Position**          | Section                     | Controls the position of the legend on the chart. Options include `X Position` (Left, Center, Right) and `Y Position` (Top, Middle, Bottom). |
| **Padding X**         | Slider                      | Adjusts the horizontal padding around the legend. |
| **Padding Y**         | Slider                      | Adjusts the vertical padding around the legend. |
| **Background Color**  | Color Picker                | Sets the background color for the legend. |
| **Margin**            | Slider                      | Adjusts the margin around the entire legend box. |
| **Border**            | Multiple     | Lets you set a border around the Legend and change its color, line type, etc. |
| **Padding**           | Slider                      | Adjusts the padding inside the legend box. |
| **Space**           | Multiple sliders                      | Adjusts the legend's logo and text spacing.   |
| **Font**               | Section   | Allows customization of the font settings for the legend. |
| **Font Family**        | Dropdown  | Selects the font family. Default is 'Open Sans'. |
| **Font Style**         | Icons     | Options to change the font color, or make the font bold or italic. |
| **Font Size**          | Slider    | Adjusts the font size for the legend. |

### DataSet

| Option               | Type                        | Function |
|----------------------|-----------------------------|----------|
| **Fill**             | Checkbox                    | Enables or disables the filling of the area under the lines in the chart with color.      |
| **Stroke**           | Checkbox                    | Toggles the visibility of the stroke around data points. |
| **Stroke Style**     | Dropdown                    | Selects the style of the stroke (e.g., solid, dashed). |
| **Stroke Width**     | Slider                      | Adjusts the width of the stroke around data points. |
| **Bezier Curve**     | Checkbox + Slider           | Toggles the use of a bezier curve for line smoothing. |

### Point Dot

| Option          | Type       | Function                                                   |
|-----------------|------------|------------------------------------------------------------|
| **Shape**       | Dropdown   | Selects the shape of the point dots.        |
| **Radius**      | Slider     | Adjusts the radius of the point dots.                      |
| **Stroke Style**| Dropdown   | Selects the style of the stroke around point dots.         |
| **Stroke Width**| Slider     | Adjusts the width of the stroke around point dots.         |

### Scale

| Option            | Type        | Function                                                   |
|-------------------|-------------|------------------------------------------------------------|
| **Show Labels**   | Checkbox    | Toggles the visibility of labels on the scale.             |
| **Label**         | Input Field | Sets the text for the scale labels.                        |
| **Show Line**    | Checkbox | Toggles the visibility of the line                      |
| **Line Color**    | Color Picker| Selects the color of the scale lines.                      |
| **Line Width**    | Slider      | Adjusts the width of the scale lines.                      |
| **Line Style**    | Dropdown    | Selects the style of the scale lines (e.g., solid, dashed).|
| **X Scale Line**  | Switch + section      | Toggles the visibility of the X scale line and opens customization settings.                |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Line Position** | Dropdown    | Sets the position of the line (e.g., Bottom).              |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Line Color** | Color picker    | Sets the color.              |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="nowrap">**Line Width** | Slider    | Sets the width.              |
| **Min**      | Slider / Input Field      | Sets the minimum value of the scale.                   |
| **Max**      | Slider / Input Field      | Sets the maximum value of the scale.                   |
| **Min Interval**      | Slider / Input Field      | Adjusts the minimum interval between scale marks.                   |
| **Override**      | Switch + Section      | Allows manual adjustment of scale starting value, step, and width.                   |
| **Tick Size**     | Sliders     | Adjusts the size of ticks on the scale (Top, Bottom, Left, Right). |
| **Font**               | Section   | Allows customization of the font settings for the scale. |
| **Font Family**        | Dropdown  | Selects the font family. Default is 'Open Sans'. |
| **Font Style**         | Icons     | Options to change the font color, or make the font bold or italic. |
| **Font Size**          | Slider    | Adjusts the font size for the scale. |

### Axis

| Option            | Type        | Function                                                   |
|-------------------|-------------|------------------------------------------------------------|
| **X Axis**   | Section + Toggle     | Toggles the X axis visibility and enables settings to customize it.             |
| **Text Rotate**         | Slider | Rotates X axis points labels.                        |
| **Label**    | Toggle | Toggles X axis label visibility.                      |
| **Font**               | Section   | Allows customization of the font settings for the X axis label. |
| **Font Family**        | Dropdown  | Selects the font family. Default is 'Open Sans'. |
| **Font Style**         | Icons     | Options to change the font color, or make the font bold or italic. |
| **Font Size**          | Slider    | Adjusts the font size for the X axis label. |
| **Y Axis**    | Section      | Provides options to customize the Y axis' label, position, and font.                      |

### Grid

| Option         | Type        | Function                                               |
|----------------|-------------|--------------------------------------------------------|
| **Line Color** | Color Picker| Selects the color of the grid lines.                   |
| **Overlay**    | Checkbox    | Toggles the overlay of grid lines on the chart.        |
| **Line Style** | Dropdown    | Selects the style of the grid lines (e.g., solid, dashed). |
| **Line Width** | Slider      | Adjusts the width of the grid lines.                   |
| **X Lines Step**| Slider     | Adjusts the spacing between vertical grid lines.       |
| **Y Lines Step**| Slider     | Adjusts the spacing between horizontal grid lines.     |

### Text

| Option         | Type        | Function                                               |
|----------------|-------------|--------------------------------------------------------|
| **Title** | Section | Options to customize the chart's title's text, color, fonts, etc.                   |
| **SubTitle**    | Section    | Options to customize the chart's subtitle's text, color, fonts, etc.       |
| **Footnote**    | Section    | Options to customize the chart's footnote's text, color, fonts, etc.       |

### Annotations

| Option          | Type         | Function                                              |
|-----------------|--------------|-------------------------------------------------------|
| **Annotations**       | Toggle     | Toggles display of data annotations on the chart when hovering over points with the mouse.     |
| **Value**       | Dropdown     | Selects the data value to annotate on the chart (percentage, label, or value).      |
| **BackColor**   | Color Picker | Sets the background color for the annotation.         |
| **Padding**     | Sliders      | Adjusts the padding around the annotation (Top, Left, Right, Bottom). |
| **Border**      | Button + Toggle       | Configures the border settings for the annotation.    |
| **Font**        | Button       | Opens font customization options for the annotation text. |

### Animation

| Option         | Type        | Function                                                  |
|----------------|-------------|-----------------------------------------------------------|
| **Steps**      | Slider      | Adjusts the number of steps in the animation.             |
| **Easing**     | Dropdown    | Selects the easing function for the animation (e.g., Linear). |
| **In & Out**   | Dropdown    | Chooses the animation direction (In, Out).               |
| **By Dataset** | Checkbox    | Animates the chart by dataset.                            |
| **Left To Right** | Checkbox | Animates the chart from left to right.                    |
| **Animate**    | Button      | Starts the animation.                                     |

### Freehand

| Option            | Type        | Function                                                     |
|-------------------|-------------|--------------------------------------------------------------|
| **Stroke Roughness** | Slider   | Adjusts the roughness of the stroke lines.                   |
| **Stroke Bowing** | Slider      | Controls the bowing effect of the stroke lines.              |
| **Fill Style**    | Dropdown    | Selects the fill style for the chart elements (e.g., Hachure). |
| **Fill Weight**   | Slider      | Adjusts the weight of the fill lines.                        |
| **Fill Roughness**| Slider      | Controls the roughness of the fill.                          |
| **Fill Bowing**   | Slider      | Adjusts the bowing of the fill lines.                        |
| **Hachure Angle** | Dropdown    | Sets the angle of the hachure lines.                         |
| **Hachure Gap**   | Slider      | Adjusts the gap between hachure lines.                       |
