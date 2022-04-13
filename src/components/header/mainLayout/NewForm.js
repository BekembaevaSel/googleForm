import React from 'react'
import styled from 'styled-components'

const NewForm = () => {
	return (
		<>
			<NewFormControl>
				<div>
					<div>
						<textarea type='text' value='Новая форма'  rows="5" cols="33"/>
					</div>
					<div>
						<textarea value='Описание'  rows="5" cols="33"/>
					</div>
				</div>
			</NewFormControl>
		</>
	)
}
const NewFormControl = styled.div`
	margin: 0 auto;
	background: #fff;
	width: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 25px;
	padding: 10px 0 0 15px;
	border-top: 1ch solid darkviolet;
	border-radius: 4px;
	box-shadow: 2px 3px 2px 0px grey;
	& textarea {
		width: 650px;
		height: 48px;
		font-size: 32px;
		font-weight: 400;

		color: #202124;

		border: none;
		outline: none;
	}
	textarea:active {
		border-left: 1ch solid blue;
	}
`
export default NewForm
