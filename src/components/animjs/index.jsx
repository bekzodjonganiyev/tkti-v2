import React from 'react'
import ContentLoader from 'react-content-loader'

const DoorDashFavorite = props => (
  <ContentLoader
    width={props?.width}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
  </ContentLoader>
)

const ThreeDots = props => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

const EventsLoader = props => (
    <ContentLoader
      width={props.width}
      height={300}
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
      <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
      <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
      <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
      <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
      <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
      <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
      <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
      <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
      <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
      <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
      <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>
)
  
const SmallForm = props => {
    return (
      <ContentLoader
        height={200}
        width={400}
        viewBox="0 0 400 200"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
      </ContentLoader>
    )
  }

export { ThreeDots, DoorDashFavorite,EventsLoader,SmallForm}