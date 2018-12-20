import * as React from "react";
import {
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton,
  InfoIcon
} from "@material-ui/core";

import { Imgs, ImgFolder, ImgExt } from "./constants";

const ImageGrid = () => (
  <GridList cellHeight={180}>
    <GridListTile key="Subheader" cols={12} style={{ height: "auto" }}>
      <ListSubheader component="div">Choose a meme</ListSubheader>
    </GridListTile>
    {Imgs.map(img => (
      <GridListTile>
        <img src={img.url} />
        <GridListTileBar title={img.name} />
      </GridListTile>
    ))}
  </GridList>
);

export default ImageGrid;
