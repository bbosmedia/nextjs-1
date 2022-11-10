import React from 'react'
import './HomePorductSection.css'
import { Container, SectionTitle } from '../../ui'
import Link from 'next/link'
import ProductListItem from '../ProductListItem'

const HomeProductSection = () => {
	return (
		<section className="home-product">
			<Container>
				<SectionTitle>Product</SectionTitle>
                <div className='home-product-header'>
                    <h3>Choose your product themes.</h3>
                    <p>Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>
                </div>
                <ul className='home-product-list'>
                    <ProductListItem id={1} title="Vintage" text='the use of simple and limited elements to get the best effect or impression.' />
                    <ProductListItem id={2} title="Minimalist" text='the use of simple and limited elements to get the best effect or impression.' />
                    <ProductListItem id={3} title="Modern" text='the use of simple and limited elements to get the best effect or impression.' />
                    <ProductListItem id={4} title="Transitional" text='the use of simple and limited elements to get the best effect or impression.' />
                </ul>
			</Container>
		</section>
	)
}

export default HomeProductSection
