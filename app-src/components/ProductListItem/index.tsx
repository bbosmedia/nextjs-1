import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './ProductListItem.css'

interface IProductListItem{
    id: number
    title: string,
    text: string
}

const ProductListItem:FC<IProductListItem> = ({id, title, text}) => {
	return (
		<li className="product-list-item">
			<Link href="#">
				<div className="left">
					<h5 className="number">0{id}</h5>
					<div>
						<h5 className="title">{title}</h5>
                        <p className='text'>{text}</p>
					</div>
				</div>
                <AiOutlineArrowRight />
			</Link>
		</li>
	)
}

export default ProductListItem
