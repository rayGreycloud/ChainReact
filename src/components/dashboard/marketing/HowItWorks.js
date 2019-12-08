import React from 'react'
import MarketingFooter from '../footer/MarketingFooter'

const content = `
She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very 
carefully put a toxin dart through the center of a skyscraper canyon. No sound but the muted purring
 of the Villa bespeak a turning in, a denial of the bright void beyond the hull. The last Case saw 
 of Chiba were the cutting edge, whole bodies of technique supplanted monthly, and still he’d see 
the matrix in his...
`
const buttons = [
  {
    content: 'Learn More',
    color: 'black'
  },
  {
    content: 'Join Now',
    color: 'black'
  }
]
export default function HowItWorks() {
  return (
    <MarketingFooter
      title="How it Works"
      footerClass="how-it-works"
      content={content}
      CTAs={buttons}
      txtPosition="left"
    />
  )
}
