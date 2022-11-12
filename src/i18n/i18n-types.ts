// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * L​a​n​g​u​a​g​e
	 */
	Language: string
	Home: {
		/**
		 * G​e​n​e​r​a​t​e
		 */
		GenerateButton: string
		PromptInput: {
			/**
			 * P​o​r​t​r​a​i​t​ ​o​f​ ​a​ ​c​a​t​ ​b​y​ ​V​a​n​ ​G​o​g​h
			 */
			Placeholder: string
		}
		WidthTabBar: {
			/**
			 * W​i​d​t​h
			 */
			Title: string
			/**
			 * T​h​e​ ​w​i​d​t​h​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		HeightTabBar: {
			/**
			 * H​e​i​g​h​t
			 */
			Title: string
			/**
			 * T​h​e​ ​h​e​i​g​h​t​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		InferenceStepsTabBar: {
			/**
			 * I​n​f​e​r​e​n​c​e​ ​S​t​e​p​s
			 */
			Title: string
			/**
			 * H​o​w​ ​m​a​n​y​ ​s​t​e​p​s​ ​w​i​l​l​ ​b​e​ ​t​a​k​e​n​ ​t​o​ ​g​e​n​e​r​a​t​e​ ​(​d​i​f​f​u​s​e​)​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		GuidanceScaleSlider: {
			/**
			 * G​u​i​d​a​n​c​e​ ​S​c​a​l​e
			 */
			Title: string
			/**
			 * H​o​w​ ​s​i​m​i​l​a​r​ ​t​h​e​ ​i​m​a​g​e​ ​w​i​l​l​ ​b​e​ ​t​o​ ​y​o​u​r​ ​p​r​o​m​p​t​.​ ​H​i​g​h​e​r​ ​v​a​l​u​e​s​ ​m​a​k​e​ ​t​h​e​ ​i​m​a​g​e​ ​c​l​o​s​e​r​ ​t​o​ ​y​o​u​r​ ​p​r​o​m​p​t​.
			 */
			Paragraph: string
		}
		NegativePromptInput: {
			/**
			 * N​e​g​a​t​i​v​e​ ​P​r​o​m​p​t
			 */
			Title: string
			/**
			 * N​e​g​a​t​i​v​e​ ​p​r​o​m​p​t
			 */
			Placeholder: string
			/**
			 * T​o​ ​r​e​m​o​v​e​ ​u​n​w​a​n​t​e​d​ ​t​h​i​n​g​s​ ​f​r​o​m​ ​t​h​e​ ​i​m​a​g​e​.​ ​I​t​ ​d​o​e​s​ ​t​h​e​ ​o​p​p​o​s​i​t​e​ ​o​f​ ​w​h​a​t​ ​t​h​e​ ​p​r​o​m​p​t​ ​d​o​e​s​.
			 */
			Paragraph: string
		}
		SeedInput: {
			/**
			 * S​e​e​d
			 */
			Title: string
			/**
			 * S​e​e​d​ ​n​u​m​b​e​r
			 */
			Placeholder: string
			/**
			 * G​e​t​ ​r​e​p​e​a​t​a​b​l​e​ ​r​e​s​u​l​t​s​.​ ​A​ ​s​e​e​d​ ​c​o​m​b​i​n​e​d​ ​w​i​t​h​ ​t​h​e​ ​s​a​m​e​ ​p​r​o​m​p​t​ ​a​n​d​ ​o​p​t​i​o​n​s​ ​g​e​n​e​r​a​t​e​s​ ​t​h​e​ ​s​a​m​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
	}
	History: {
		/**
		 * G​e​n​e​r​a​t​i​o​n​s
		 */
		GenerationsTitle: string
		/**
		 * L​a​s​t​ ​{​c​o​u​n​t​}​ ​o​n​l​y
		 * @param {number} count
		 */
		GenerationsMaxSavedCountWarning: RequiredParams<'count'>
		/**
		 * Y​o​u​ ​d​i​d​n​'​t​ ​g​e​n​e​r​a​t​e​ ​a​n​y​ ​i​m​a​g​e​s​ ​y​e​t​.
		 */
		NoGenerationsYet: string
	}
	Live: {
		/**
		 * G​e​n​e​r​a​t​i​o​n​s
		 */
		GenerationsTitle: string
		/**
		 * T​o​t​a​l​ ​D​u​r​a​t​i​o​n
		 */
		TotalDurationTitle: string
		/**
		 * U​p​s​c​a​l​e​s
		 */
		UpscalesTitle: string
		GenerationTooltip: {
			/**
			 * C​o​u​n​t​r​y
			 */
			CountryTitle: string
			Type: {
				/**
				 * T​y​p​e
				 */
				Title: string
				/**
				 * G​e​n​e​r​a​t​i​o​n
				 */
				Generation: string
				/**
				 * U​p​s​c​a​l​e
				 */
				Upscale: string
			}
			/**
			 * D​i​m​e​n​s​i​o​n​s
			 */
			DimensionsTitle: string
			/**
			 * S​t​e​p​s
			 */
			StepsTitle: string
			/**
			 * S​c​a​l​e
			 */
			ScaleTitle: string
			/**
			 * D​u​r​a​t​i​o​n
			 */
			DurationTitle: string
			Status: {
				/**
				 * S​t​a​t​u​s
				 */
				Title: string
				/**
				 * S​t​a​r​t​e​d
				 */
				Started: string
				/**
				 * S​u​c​c​e​e​d​e​d
				 */
				Succeeded: string
				/**
				 * F​a​i​l​e​d
				 */
				Failed: string
			}
			Server: {
				/**
				 * S​e​r​v​e​r
				 */
				Title: string
				/**
				 * D​e​f​a​u​l​t
				 */
				Default: string
				/**
				 * C​u​s​t​o​m
				 */
				Custom: string
			}
			/**
			 * U​n​k​n​o​w​n
			 */
			UnknownTitle: string
		}
		/**
		 * W​a​i​t​i​n​g​ ​f​o​r​ ​g​e​n​e​r​a​t​i​o​n​s
		 */
		WaitingTitle: string
	}
	Navbar: {
		/**
		 * H​o​m​e
		 */
		HomeTab: string
		/**
		 * H​i​s​t​o​r​y
		 */
		HistoryTab: string
		/**
		 * G​a​l​l​e​r​y
		 */
		GalleryTab: string
		/**
		 * L​i​v​e
		 */
		LiveTab: string
	}
	Settings: {
		/**
		 * S​e​t​t​i​n​g​s
		 */
		Title: string
		/**
		 * S​w​i​t​c​h​ ​S​e​r​v​e​r
		 */
		SwitchServerButton: string
		/**
		 * S​u​b​m​i​t​ ​t​o​ ​G​a​l​l​e​r​y
		 */
		SubmitToGalleryToggle: string
		/**
		 * A​d​v​a​n​c​e​d​ ​M​o​d​e
		 */
		AdvancedModeToggle: string
		/**
		 * D​a​r​k​ ​M​o​d​e
		 */
		DarkModeToggle: string
	}
	GenerationFullscreen: {
		/**
		 * D​o​w​n​l​o​a​d
		 */
		DownloadButton: string
		/**
		 * D​o​n​e​!
		 */
		DoneButtonState: string
		/**
		 * C​o​p​y​ ​P​r​o​m​p​t
		 */
		CopyPromptButton: string
		/**
		 * C​o​p​y​ ​N​e​g​a​t​i​v​e​ ​P​r​o​m​p​t
		 */
		CopyNegativePromptButton: string
		/**
		 * C​o​p​i​e​d​!
		 */
		CopiedButtonState: string
		/**
		 * R​e​r​o​l​l
		 */
		RerollButton: string
		/**
		 * R​e​g​e​n​e​r​a​t​e
		 */
		RegenerateButton: string
		/**
		 * G​e​n​e​r​a​t​e
		 */
		GenerateButton: string
		/**
		 * U​p​s​c​a​l​e
		 */
		UpscaleButton: string
		UpscaleTabBar: {
			/**
			 * U​p​s​c​a​l​e​d
			 */
			UpscaledTitle: string
			/**
			 * O​r​i​g​i​n​a​l
			 */
			OriginalTitle: string
		}
		Dimensions: {
			/**
			 * D​i​m​e​n​s​i​o​n​s
			 */
			Title: string
		}
		Duration: {
			/**
			 * D​u​r​a​t​i​o​n
			 */
			Title: string
		}
	}
	SetServerModal: {
		/**
		 * S​e​t​ ​S​e​r​v​e​r
		 */
		SetServerTitle: string
		/**
		 * S​w​i​t​c​h​ ​S​e​r​v​e​r
		 */
		SwitchServerTitle: string
		/**
		 * T​h​e​ ​s​e​r​v​e​r​ ​w​i​l​l​ ​b​e​ ​u​s​e​d​ ​f​o​r​ ​g​e​n​e​r​a​t​i​n​g​ ​i​m​a​g​e​s​.
		 */
		Paragraph: string
		/**
		 * S​e​t
		 */
		SetButton: string
		/**
		 * D​e​f​a​u​l​t
		 */
		DefaultButton: string
		ServerUrlInput: {
			/**
			 * S​e​r​v​e​r​ ​U​R​L
			 */
			Placeholder: string
		}
		/**
		 * S​w​i​t​c​h​ ​t​o​ ​D​e​f​a​u​l​t​ ​S​e​r​v​e​r
		 */
		SwitchToDefaultServerButton: string
	}
	Blog: {
		/**
		 * B​l​o​g​ ​P​o​s​t​s
		 */
		Title: string
		/**
		 * B​a​c​k​ ​t​o​ ​B​l​o​g
		 */
		BackToBlogButton: string
	}
	Redirect: {
		/**
		 * R​e​d​i​r​e​c​t​i​n​g​ ​t​o​ ​{​n​a​m​e​}
		 * @param {string} name
		 */
		RedirectingToTitle: RequiredParams<'name'>
	}
	Shared: {
		/**
		 * S​t​a​r​t​ ​g​e​n​e​r​a​t​i​n​g​ ​b​e​a​u​t​i​f​u​l​ ​i​m​a​g​e​s​!
		 */
		StartGeneratingTitle: string
		/**
		 * S​t​a​r​t​ ​G​e​n​e​r​a​t​i​n​g
		 */
		StartGeneratingButton: string
		/**
		 * J​o​i​n​ ​U​s
		 */
		JoinUsTitle: string
		/**
		 * G​o​ ​H​o​m​e
		 */
		GoHomeButton: string
	}
	Error: {
		/**
		 * S​o​m​e​t​h​i​n​g​ ​w​e​n​t​ ​w​r​o​n​g​ ​:​(
		 */
		SomethingWentWrong: string
		/**
		 * N​S​F​W​ ​c​o​n​t​e​n​t​ ​d​e​t​e​c​t​e​d​,​ ​t​r​y​ ​a​n​o​t​h​e​r​ ​p​r​o​m​p​t​ ​:​(
		 */
		NSFW: string
		/**
		 * T​h​e​ ​s​e​r​v​e​r​ ​s​e​e​m​s​ ​o​f​f​l​i​n​e​.​ ​Y​o​u​ ​m​i​g​h​t​ ​w​a​n​t​ ​t​o​ ​r​e​f​r​e​s​h​ ​t​h​e​ ​p​a​g​e​ ​o​r​ ​s​e​t​ ​a​n​o​t​h​e​r​ ​s​e​r​v​e​r​ ​f​r​o​m​ ​t​h​e​ ​s​e​t​t​i​n​g​s​.
		 */
		ServerSeemsOffline: string
		/**
		 * T​h​i​s​ ​s​e​r​v​e​r​ ​i​s​n​'​t​ ​c​o​m​p​a​t​i​b​l​e​ ​o​r​ ​n​o​t​ ​r​e​s​p​o​n​d​i​n​g​.
		 */
		ServerSetNotWorking: string
		/**
		 * N​o​t​ ​F​o​u​n​d
		 */
		NotFound: string
	}
}

export type TranslationFunctions = {
	/**
	 * Language
	 */
	Language: () => LocalizedString
	Home: {
		/**
		 * Generate
		 */
		GenerateButton: () => LocalizedString
		PromptInput: {
			/**
			 * Portrait of a cat by Van Gogh
			 */
			Placeholder: () => LocalizedString
		}
		WidthTabBar: {
			/**
			 * Width
			 */
			Title: () => LocalizedString
			/**
			 * The width of the image.
			 */
			Paragraph: () => LocalizedString
		}
		HeightTabBar: {
			/**
			 * Height
			 */
			Title: () => LocalizedString
			/**
			 * The height of the image.
			 */
			Paragraph: () => LocalizedString
		}
		InferenceStepsTabBar: {
			/**
			 * Inference Steps
			 */
			Title: () => LocalizedString
			/**
			 * How many steps will be taken to generate (diffuse) the image.
			 */
			Paragraph: () => LocalizedString
		}
		GuidanceScaleSlider: {
			/**
			 * Guidance Scale
			 */
			Title: () => LocalizedString
			/**
			 * How similar the image will be to your prompt. Higher values make the image closer to your prompt.
			 */
			Paragraph: () => LocalizedString
		}
		NegativePromptInput: {
			/**
			 * Negative Prompt
			 */
			Title: () => LocalizedString
			/**
			 * Negative prompt
			 */
			Placeholder: () => LocalizedString
			/**
			 * To remove unwanted things from the image. It does the opposite of what the prompt does.
			 */
			Paragraph: () => LocalizedString
		}
		SeedInput: {
			/**
			 * Seed
			 */
			Title: () => LocalizedString
			/**
			 * Seed number
			 */
			Placeholder: () => LocalizedString
			/**
			 * Get repeatable results. A seed combined with the same prompt and options generates the same image.
			 */
			Paragraph: () => LocalizedString
		}
	}
	History: {
		/**
		 * Generations
		 */
		GenerationsTitle: () => LocalizedString
		/**
		 * Last {count} only
		 */
		GenerationsMaxSavedCountWarning: (arg: { count: number }) => LocalizedString
		/**
		 * You didn't generate any images yet.
		 */
		NoGenerationsYet: () => LocalizedString
	}
	Live: {
		/**
		 * Generations
		 */
		GenerationsTitle: () => LocalizedString
		/**
		 * Total Duration
		 */
		TotalDurationTitle: () => LocalizedString
		/**
		 * Upscales
		 */
		UpscalesTitle: () => LocalizedString
		GenerationTooltip: {
			/**
			 * Country
			 */
			CountryTitle: () => LocalizedString
			Type: {
				/**
				 * Type
				 */
				Title: () => LocalizedString
				/**
				 * Generation
				 */
				Generation: () => LocalizedString
				/**
				 * Upscale
				 */
				Upscale: () => LocalizedString
			}
			/**
			 * Dimensions
			 */
			DimensionsTitle: () => LocalizedString
			/**
			 * Steps
			 */
			StepsTitle: () => LocalizedString
			/**
			 * Scale
			 */
			ScaleTitle: () => LocalizedString
			/**
			 * Duration
			 */
			DurationTitle: () => LocalizedString
			Status: {
				/**
				 * Status
				 */
				Title: () => LocalizedString
				/**
				 * Started
				 */
				Started: () => LocalizedString
				/**
				 * Succeeded
				 */
				Succeeded: () => LocalizedString
				/**
				 * Failed
				 */
				Failed: () => LocalizedString
			}
			Server: {
				/**
				 * Server
				 */
				Title: () => LocalizedString
				/**
				 * Default
				 */
				Default: () => LocalizedString
				/**
				 * Custom
				 */
				Custom: () => LocalizedString
			}
			/**
			 * Unknown
			 */
			UnknownTitle: () => LocalizedString
		}
		/**
		 * Waiting for generations
		 */
		WaitingTitle: () => LocalizedString
	}
	Navbar: {
		/**
		 * Home
		 */
		HomeTab: () => LocalizedString
		/**
		 * History
		 */
		HistoryTab: () => LocalizedString
		/**
		 * Gallery
		 */
		GalleryTab: () => LocalizedString
		/**
		 * Live
		 */
		LiveTab: () => LocalizedString
	}
	Settings: {
		/**
		 * Settings
		 */
		Title: () => LocalizedString
		/**
		 * Switch Server
		 */
		SwitchServerButton: () => LocalizedString
		/**
		 * Submit to Gallery
		 */
		SubmitToGalleryToggle: () => LocalizedString
		/**
		 * Advanced Mode
		 */
		AdvancedModeToggle: () => LocalizedString
		/**
		 * Dark Mode
		 */
		DarkModeToggle: () => LocalizedString
	}
	GenerationFullscreen: {
		/**
		 * Download
		 */
		DownloadButton: () => LocalizedString
		/**
		 * Done!
		 */
		DoneButtonState: () => LocalizedString
		/**
		 * Copy Prompt
		 */
		CopyPromptButton: () => LocalizedString
		/**
		 * Copy Negative Prompt
		 */
		CopyNegativePromptButton: () => LocalizedString
		/**
		 * Copied!
		 */
		CopiedButtonState: () => LocalizedString
		/**
		 * Reroll
		 */
		RerollButton: () => LocalizedString
		/**
		 * Regenerate
		 */
		RegenerateButton: () => LocalizedString
		/**
		 * Generate
		 */
		GenerateButton: () => LocalizedString
		/**
		 * Upscale
		 */
		UpscaleButton: () => LocalizedString
		UpscaleTabBar: {
			/**
			 * Upscaled
			 */
			UpscaledTitle: () => LocalizedString
			/**
			 * Original
			 */
			OriginalTitle: () => LocalizedString
		}
		Dimensions: {
			/**
			 * Dimensions
			 */
			Title: () => LocalizedString
		}
		Duration: {
			/**
			 * Duration
			 */
			Title: () => LocalizedString
		}
	}
	SetServerModal: {
		/**
		 * Set Server
		 */
		SetServerTitle: () => LocalizedString
		/**
		 * Switch Server
		 */
		SwitchServerTitle: () => LocalizedString
		/**
		 * The server will be used for generating images.
		 */
		Paragraph: () => LocalizedString
		/**
		 * Set
		 */
		SetButton: () => LocalizedString
		/**
		 * Default
		 */
		DefaultButton: () => LocalizedString
		ServerUrlInput: {
			/**
			 * Server URL
			 */
			Placeholder: () => LocalizedString
		}
		/**
		 * Switch to Default Server
		 */
		SwitchToDefaultServerButton: () => LocalizedString
	}
	Blog: {
		/**
		 * Blog Posts
		 */
		Title: () => LocalizedString
		/**
		 * Back to Blog
		 */
		BackToBlogButton: () => LocalizedString
	}
	Redirect: {
		/**
		 * Redirecting to {name}
		 */
		RedirectingToTitle: (arg: { name: string }) => LocalizedString
	}
	Shared: {
		/**
		 * Start generating beautiful images!
		 */
		StartGeneratingTitle: () => LocalizedString
		/**
		 * Start Generating
		 */
		StartGeneratingButton: () => LocalizedString
		/**
		 * Join Us
		 */
		JoinUsTitle: () => LocalizedString
		/**
		 * Go Home
		 */
		GoHomeButton: () => LocalizedString
	}
	Error: {
		/**
		 * Something went wrong :(
		 */
		SomethingWentWrong: () => LocalizedString
		/**
		 * NSFW content detected, try another prompt :(
		 */
		NSFW: () => LocalizedString
		/**
		 * The server seems offline. You might want to refresh the page or set another server from the settings.
		 */
		ServerSeemsOffline: () => LocalizedString
		/**
		 * This server isn't compatible or not responding.
		 */
		ServerSetNotWorking: () => LocalizedString
		/**
		 * Not Found
		 */
		NotFound: () => LocalizedString
	}
}

export type Formatters = {}
