import Link from 'next/link'
import React from 'react'
import image from '../../../public/assets/images/home-material.png'
import Image from 'next/image'
import './HomeMaterialSection.css'
import { Container, SectionTitle } from '../../ui'

const HomeMaterialSection = () => {
  return (
    <section className='home-material'>
        <Container>
            <SectionTitle>Material</SectionTitle>
            <div className="home-madterial-inner">
                <div className="home-material-info">
                    <h4>Choice of materials for quality furniture.</h4>
                    <p>You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
                    <Link href="#" className="outline-btn">See Materials</Link>
                </div>
                <Image className='home-material-image' src={image} fill unoptimized alt="Materials" />
            </div>
        </Container>
    </section>
  )
}

export default HomeMaterialSection