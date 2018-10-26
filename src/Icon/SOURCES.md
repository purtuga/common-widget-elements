# Icon Sources

Icon sources define how Icons should be loaded. Their purpose is to return an Element (HTML or SVG) that represents the icon. 

Sources are defined as object supporting the following Interface:

```javascript
{
    /**
     * @return {Promise<HTMLElement>} 
     */
    getIcon(props, iconInstance) {}
    
    doSetup(IconClass) {}
    
    /**
     * @return {String} 
     */
    getStyles() {}
}
```

The only required method is `getIcon`, which must return a `Promise` that resolves with the Element that represents the icon.

>   **NOTE:** if an HTMLElement is going to be returned, it should be set with a css class name of `i-con`. In addition, if the returned Element shows an icon based on a Font, then it should also have a class name of `i-con-font`. These classes will ensure the Icon is displayed correctly.

In addition, if the Interface also provides the following:
 
-   `doSetup()`: this method will be called only once and it is expected do whatever global setup it needs (ex. for Font Icons, this might mean loading the `font-face` definition using the `Icon.setupFont()` method).
-   `getStyles()`: returns a string with CSS styles that are needed for the Icon. With Font Icons, this is normally a set of styles for a css class that is also applied to the Icon Element. This method is called only once per Icon instance.
 