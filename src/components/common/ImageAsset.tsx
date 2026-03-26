"use client"

import { useEffect, useState } from "react"

type ImageAssetProps = {
	src: string
	alt?: string
	className?: string
	placeholderText?: string
}

export function ImageAsset({
	src,
	alt = "",
	className = "",
	placeholderText
}: ImageAssetProps) {
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		const clearError = () => setHasError(false)
		clearError()
	}, [src])

	if (!src || hasError) {
		return (
			<div
				aria-label={alt || placeholderText || src}
				className={`flex items-center justify-center border border-surface-border bg-surface/80 px-4 text-center text-sm font-semibold text-zinc-500 ${className}`}
			>
				<span>{placeholderText || src || "image-placeholder"}</span>
			</div>
		)
	}

	return (
		<img
			src={`images/${src}`}
			alt={alt}
			className={`object-cover ${className}`}
			onError={() => setHasError(true)}
		/>
	)
}
