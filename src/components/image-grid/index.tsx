import * as React from "react";
import axios from "axios";
import {
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton,
  InfoIcon
} from "@material-ui/core";

import { GetImages } from "./actions";

const memeEndpoint = "https://api.imgflip.com/get_memes";

class ImageGrid extends React.Component {
  constructor() {
    super();

    this.state = { imgs: [] };
  }

  async componentDidMount() {
    let resp;

    try {
      resp = await axios.get(memeEndpoint);
    } catch (err) {
      console.log(err);
    }

    const imgs = resp.data.data.memes;

    this.setState({ imgs });
  }

  render() {
    const { imgs } = this.state;

    return (
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={12} style={{ height: "auto" }}>
          <ListSubheader component="div">Choose a meme</ListSubheader>
        </GridListTile>
        {imgs.map(img => (
          <GridListTile>
            <img src={img.url} />
            <GridListTileBar title={img.name} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default ImageGrid;
