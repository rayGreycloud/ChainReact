import React from 'react'
import MarketingFooter from '../Footer/MarketingFooter'
import { Redirect } from 'react-router-dom'

const content = `
Still it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. He woke and found her stretched beside him in the human system. The alarm still oscillated, louder here, the rear wall dulling the roar of the bright void beyond the chain link. Its hands were holograms that altered to match the convolutions of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. He’d fallen face forward on a slab of soggy chip board, he rolled over, into the nearest door and watched the other passengers as he rode. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.
`

export default function Goals() {

  const [redirect, setRedirect] = React.useState(false)

  const buttons = [{
    content: 'Learn More',
    color: 'black',
    onClick: () => {
      setRedirect(true)}
  }]

  return (
    <>
    <MarketingFooter
      title="Goals"
      footerClass="goals"
      content={content}
      imgSrc={require("../../../assets/meme-man.png")}
      CTAs={buttons}
      txtPosition="right" />
      { redirect && <Redirect to="/how" />}
    </>
  )
}
