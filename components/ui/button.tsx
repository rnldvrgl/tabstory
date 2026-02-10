import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { playSound } from "@/lib/sounds";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				modern: "group relative overflow-hidden rounded-2xl border-2 border-pink-400/50 hover:border-pink-300  text-base md:text-lg font-bold tracking-wide transition-all duration-300 bg-linear-to-r from-pink-600 via-rose-600 to-pink-600 hover:from-pink-500 hover:via-rose-500 hover:to-pink-500 text-white shadow-[0_8px_20px_rgba(236,72,153,0.25)] hover:shadow-[0_15px_35px_rgba(236,72,153,0.35)] hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-[1.02]",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				modern: "h-12 px-8 has-[>svg]:px-4  min-w-[200px]! md:min-w-[240px]! px-10! py-5! md:px-12!",
				icon: "size-9",
				"icon-xs":
					"size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	// Modern variant with ripple effect
	if (variant === "modern") {
		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			playSound("buttonClick");
			if (props.onClick) {
				props.onClick(e);
			}
		};

		return (
			<Comp
				data-slot="button"
				data-variant={variant}
				data-size={size}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
				onClick={handleClick}
			>
				{/* Ripple effect element */}
				<span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-out group-hover:w-75 group-hover:h-75 pointer-events-none" />
				{/* Content wrapper */}
				<span className="relative z-10 flex items-center gap-2">
					{props.children}
				</span>
			</Comp>
		);
	}

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
