import React from 'react'
import styled from 'styled-components'
import { MdOutlinePalette } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { BsArrow90DegRight } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
	return (
		<>
			<WrapperForHeader>
				<HeaderControl>
					<div className='leftSide'>
						<img
							className='logo'
							src='https://img.icons8.com/color/48/000000/google-forms-new-logo-1.png'
						/>

						<span>Новая Форма</span>

						<AiOutlineStar
							fontSize='25px'
							color=' #5f6368'
							cursor='pointer'
						/>
					</div>
					<div className='rightSide'>
						<div>
							<MdOutlinePalette
								fontSize='30px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<AiOutlineEye
								fontSize='30px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<BsArrow90DegLeft
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<BsArrow90DegRight
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<button>Отправить</button>
						</div>
						<div>
							<BsThreeDotsVertical
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<AiOutlineUser
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
					</div>
				</HeaderControl>
				<div className='links'>
					<div>
						<a>Вопросы</a>
					</div>
					<div>
						<a>Ответы</a>
					</div>
					<div>
						<a> Настройки</a>
					</div>
				</div>
			</WrapperForHeader>
		</>
	)
}

const WrapperForHeader = styled.header`
	width: 100%;
	border-bottom: 1px solid #dadce0;
	margin-top: 25px;
	background-color: white;

	.links {
		display: flex;
		justify-content: center;
	}
	.links a {
		font-size: 14px;
		color: ' #5f6368';
		font-weight: 500;
		padding: 20px;
		cursor: pointer;
	}
	.links a:active {
		color: rgb(103, 58, 183);
		text-decoration: underline rgb(103, 58, 183) 5px;
	}
`
const HeaderControl = styled.div`
	width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& button {
		background-color: #673ab7;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 14px;
		line-height: 36px;
		width: 120px;
		outline: none;
	}
	.leftSide {
		width: 250px;
		display: flex;
		justify-content: space-between;
	}
	.rightSide {
		width: 400px;
		display: flex;
		justify-content: space-between;
	}
	& span {
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
		color: #202124;
	}
	.logo {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
`

export default Header
