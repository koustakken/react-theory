import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const Title = props => {
	const [isReversed, reverse] = useState(null)
	const [color, setColor] = useState(0)

	const [renderState, setRenderState] = useState("")
	const [renderCount, setRenderCount] = useState(1)

	const colors = ["#001f3f", "#39cccc"]
	const styles = { color: colors[color] }

	const onClickHandle = event => {
		reverse(isReversed => !isReversed)
		setColor(1)
	}

	useEffect(() => {
		setRenderState("Произошел первый render в DOM")
	}, [])

	useEffect(() => {
		if (isReversed !== null) {
			setRenderState(`Произошел rerender в DOM ${renderCount} раз`)
			setRenderCount(count => count + 1)
		}
	}, [isReversed])

	return (
		<p onClick={onClickHandle} style={styles}>
			{
				isReversed
					? props.text.split("").reverse().join("")
					: props.text
			} ({renderState})
		</p>
	)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<div>
		<h2>Нажмите на строки</h2>
		<Title text="Строка #1" />
		<Title text="Строка #2" />
		<Title text="Строка #3" />
	</div>
);