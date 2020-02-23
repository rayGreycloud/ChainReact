import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import '../../../styles/MarketingFooter.css'

const imgSrcPlaceholder =
  'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'

export default function MarketingFooter({
  title,
  content,
  anchor,
  CTAs,
  imgSrc,
  txtPosition,
  footerClass
}) {
  return (
    <div className={`${footerClass} marketing-footer`}>
      <div className="slot-left">
        {txtPosition === 'left' ? (
          <>
            <h1 className="footer-title">{title}</h1>
            <div className="footer-content">{content}</div>
            <div className="cta-holder">
              {CTAs.map((el, idx) => (
                <Button
                  basic
                  color={el.color}
                  key={`${el.footerClass}Left-${idx}`}
                  onClick={el.onClick}
                >
                  {el.content}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <Image size="medium" rounded src={imgSrc || imgSrcPlaceholder} />
        )}
      </div>
      <div className="slot-right">
        {txtPosition === 'left' ? (
          <Image size="large" src={imgSrc || imgSrcPlaceholder} />
        ) : (
          <>
            <h1>{title}</h1>
            <div>{content}</div>
            <div className="cta-holder">
              {CTAs.map((el, idx) => (
                <Button
                  basic
                  color={el.color}
                  key={`${el.footerClass}Right-${idx}`}
                  onClick={el.onClick}
                >
                  {el.content}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
