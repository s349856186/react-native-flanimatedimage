import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { requireNativeComponent, NativeModules, StyleSheet,Image,View } from 'react-native'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

const {
  ScaleToFill,
  ScaleAspectFit,
  ScaleAspectFill,
} = NativeModules.RNFLAnimatedImageManager

const MODES = {
  stretch: ScaleToFill,
  contain: ScaleAspectFit,
  cover: ScaleAspectFill,
}

class FLAnimatedImage extends Component {
  static propTypes = {
    // native only
    contentMode: PropTypes.number,

    source: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        scale: PropTypes.number,
      }),
      PropTypes.number,
    ]),
    src: PropTypes.string,
    resizeMode: PropTypes.string,
    onFrameChange: PropTypes.func,
    onLoadEnd: PropTypes.func,
  }
  static defaultProps = {
    resizeMode: 'contain',
  }

  render() {
    const contentMode = MODES[this.props.resizeMode]
    const source = resolveAssetSource(this.props.source) || {
      uri: undefined,
      width: undefined,
      height: undefined,
    }
    const src = source.uri
    var isPNG = (src.split('?')[0].search('.png') != -1);
//     return (
//       <RNFLAnimatedImage {...this.props} src={src} contentMode={contentMode} />
//     )
    return (<View>
        { isPNG ?
          <Image source={this.props.source} style={this.props.style}  />
          :
          <RNFLAnimatedImage {...this.props} src={src} contentMode={contentMode} />
        }
        </View>
    )
  }
}

const styles = StyleSheet.create({})

const RNFLAnimatedImage = requireNativeComponent(
  'RNFLAnimatedImage',
  FLAnimatedImage
)
export default FLAnimatedImage
