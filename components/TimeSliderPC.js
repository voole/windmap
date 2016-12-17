import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar, Progress } from 'semantic-ui-react'

import Loader from './Loader'

const styles = {
	progressDiv: {
		marginLeft: 20,
		marginBottom: 2,
		display: 'inline-block',
	},
	days: {
		color: '#fff',
		fontSize: 10,
	},
	day: {
		display: 'inline-block',
		textAlign: 'center',
		borderRight: '1px solid rgba(211, 211, 211, 0.7)',
		width: 144,
		height: 12,
		lineHeight: '10px',
	}
}


export default class TimeSliderPC extends React.Component {
	click = (e) => {
		console.log(e.clientX)
	}

	hover = (e) => {
		console.log(e.clientX)
	}

	render() {
		let self = this

		return (
			<Sidebar
				as='div'
				animation='overlay'
				direction='bottom'
				className='time-slider-pc'
				visible={this.props.visible}>
				{(() => {
					if (self.props.visible){
						return (
							<div style={ styles.progressDiv }>
								<Progress
									size='tiny'
									color='blue'
									className='time-slider-progress'
									percent={50}
									onClick={self.click}
									onMouseOver={self.hover}
									onMouseMove={self.hover}
									style={{ width: 306, marginBottom: 4 }} />

								<div style={ styles.days }>
									<div style={Object.assign({}, styles.day, { width:72 })}>12/17</div>
									<div style={Object.assign({}, styles.day, {})}>12/18</div>
									<div style={Object.assign({}, styles.day, { width:90, border:'none' })}>12/19</div>
								</div>
							</div>
						)
					}
				})()}
			</Sidebar>
		)
	}
}
