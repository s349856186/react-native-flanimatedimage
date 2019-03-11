import React, { Component } from 'react'

import { StyleSheet, View } from 'react-native'

class FLAnimatedImage extends Component {
  render() {
    // return <View />
    return <Image source={this.props.source} style={this.props.style}  />
  }
}

const styles = StyleSheet.create({})

export default FLAnimatedImage
