"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("2043024b-41f4-4aa2-b28b-761ad0adaf06")
	})

	return null
}

export default CrispChat
