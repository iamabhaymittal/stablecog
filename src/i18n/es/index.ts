import type { BaseTranslation } from '../i18n-types';

const es: BaseTranslation = {
	Language: 'Idioma',
	Home: {
		GenerateButton: 'Generar',
		PromptInput: {
			Placeholder: 'Retrato de un gato por Van Gogh'
		},
		WidthTabBar: {
			Title: 'Ancho',
			Paragraph: 'El ancho de la imagen.'
		},
		HeightTabBar: {
			Title: 'Alto',
			Paragraph: 'El alto de la imagen.'
		},
		InferenceStepsTabBar: {
			Title: 'Pasos de Inferencia',
			Paragraph: 'Cuántos pasos se tomarán para generar (difundir) la imagen.'
		},
		GuidanceScaleSlider: {
			Title: 'Escala de Orientación',
			Paragraph:
				'Cuán similar será la imagen a su indicación. Valores más altos hacen que la imagen se acerque más a su indicación.'
		},
		NegativePromptInput: {
			Title: 'Indicación Negativa',
			Placeholder: 'Indicación negativa',
			Paragraph:
				'Para remover cosas no deseadas de la imagen. Hace lo contrario de lo que hace la indicación.'
		},
		SeedInput: {
			Title: 'Semilla',
			Placeholder: 'Número de semilla',
			Paragraph:
				'Obtener resultados repetibles. Una semilla combinada con la misma indicación y opciones genera la misma imagen.'
		},
		SubmitToGalleryQuestion: {
			Title: '¿Enviar generaciones a la galería?',
			Paragraph: 'Puede cambiar su preferencia desde la configuración más adelante.'
		}
	},
	History: {
		GenerationsTitle: 'Generaciones',
		GenerationsMaxSavedCountWarning: 'Últimas {count:number} solamente',
		NoGenerationsYet: 'No has generado ninguna imagen todavía.'
	},
	Live: {
		GenerationsTitle: 'Generaciones',
		TotalDurationTitle: 'Duración Total',
		UpscalesTitle: 'Mejoras',
		GenerationTooltip: {
			CountryTitle: 'País',
			Type: {
				Title: 'Tipo',
				Generation: 'Generación',
				Upscale: 'Mejora'
			},
			DimensionsTitle: 'Dimensiones',
			StepsTitle: 'Pasos',
			ScaleTitle: 'Escala',
			DurationTitle: 'Duración',
			Status: {
				Title: 'Estado',
				Started: 'Iniciado',
				Succeeded: 'Exitoso',
				Failed: 'Fallido'
			},
			Server: {
				Title: 'Servidor',
				Default: 'Predeterminado',
				Custom: 'Personalizado'
			},
			UnknownTitle: 'Desconocido'
		},
		WaitingTitle: 'Esperando las generaciones',
		DurationStatusUnknown: 'Desconocido'
	},
	Navbar: {
		HomeTab: 'Inicio',
		HistoryTab: 'Historial',
		GalleryTab: 'Galería',
		LiveTab: 'En vivo'
	},
	Settings: {
		Title: 'Configuración',
		SwitchServerButton: 'Cambiar de Servidor',
		SubmitToGalleryToggle: 'Enviar a la Galería',
		AdvancedModeToggle: 'Modo Avanzado',
		DarkModeToggle: 'Modo Oscuro'
	},
	GenerationFullscreen: {
		DownloadButton: 'Descargar',
		DoneButtonState: '¡Hecho!',
		CopyPromptButton: 'Copiar Indicación',
		CopyNegativePromptButton: 'Copiar Indicación Negativa',
		CopiedButtonState: '¡Copiado!',
		RerollButton: 'Generar Aleatorio',
		RegenerateButton: 'Regenerar',
		GenerateButton: 'Generar',
		UpscaleButton: 'Mejorar',
		UpscaleTabBar: {
			UpscaledTitle: 'Mejorada',
			OriginalTitle: 'Original'
		},
		Dimensions: {
			Title: 'Dimensiones'
		},
		Duration: {
			Title: 'Duración'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Establecer Servidor',
		SwitchServerTitle: 'Cambiar de Servidor',
		Paragraph: 'El servidor se utilizará para generar imágenes.',
		SetButton: 'Establecer',
		DefaultButton: 'Predeterminado'
	},
	Blog: {
		Title: 'Entradas del Blog',
		TitleAlt: 'Blog',
		BackToBlogButton: 'Volver al Blog'
	},
	Redirect: {
		RedirectingToTitle: 'Redirigiendo a {name:string}'
	},
	Shared: {
		StartGeneratingTitle: '¡Comienza a generar hermosas imágenes!',
		StartGeneratingButton: 'Comenzar a Generar',
		JoinUsTitle: 'Únete a Nosotros',
		GoHomeButton: 'Ir a Inicio',
		SwitchToDefaultServerButton: 'Cambiar al Servidor Predeterminado',
		ShareButton: 'Compartir',
		ShareOnButton: 'Compartir en {name:string}',
		YesButton: 'Sí',
		NoButton: 'No',
		EnableButton: 'Habilitar',
		DisableButton: 'Deshabilitar',
		AddButton: 'Añadir',
		CopyLinkButton: 'Copiar Enlace',
		CopyButton: 'Copiar',
		DeleteButton: 'Eliminar',
		ServerUrlInput: {
			Placeholder: 'URL del Servidor'
		},
		LoadingTitle: 'Cargando',
		LoadingParagraph: 'Cargando...',
		LoginButton: 'Iniciar Sesión',
		LogoutButton: 'Cerrar Sesión',
		EmailInput: {
			Placeholder: 'Correo electrónico'
		},
		PasswordInput: {
			Placeholder: 'Contraseña'
		}
	},
	Error: {
		SomethingWentWrong: 'Algo salió mal :(',
		NSFW: 'Contenido inapropiado detectado, intente con otra indicación :(',
		ServerSeemsOffline:
			'El servidor parece estar fuera de línea. Puede que desee refrescar la página o establecer otro servidor desde la configuración.',
		ServerSetNotWorking: 'Este servidor no es compatible o no responde.',
		NotFound: 'No Encontrado',
		SupabaseNotFoundCantListen:
			'Instancia de Supabase no encontrada. Las generaciones no serán rastreadas.'
	},
	Admin: {
		AdminPanelTitle: 'Administrador',
		DeleteButton: 'Eliminar',
		ApproveButton: 'Aprobar',
		NoGenerationsToReview: 'No hay generaciones para revisar.',
		ServersButton: 'Servidores',
		GalleryButton: 'Galería'
	}
};
export default es;
