const clinicConfig = {
    // 1. APARIENCIA Y ESTILO (Paleta oficial extraída del logotipo San Javier)
    theme: {
        colors: {
            primary: "#0A3D6B",          // Azul profundo San Javier (titulares)
            accent: "#0066B3",           // Azul San Javier oficial (arco inferior del isotipo)
            background: "#FAFAFA",       // Off-White clínico
            surface: "#F4F9FD",          // Superficie con tinte azul clínico
            text: "#0F2438",             // Texto principal oscuro
            white: "#FFFFFF",
            whatsapp: "#25D366"
        },
        typography: {
            headlines: "'EB Garamond', serif",
            body: "'Poppins', sans-serif"
        }
    },

    // 2. DATOS GENERALES (Instagram, Google Maps y sitio oficial)
    info: {
        name: "Grupo Dental San Javier",
        shortName: "San Javier",
        tagline: "Clínica de Implantología Bucal y Especialidades Dentales en Pachuca",
        logo: "images/logo-horizontal.png",
        logoWhite: "images/logo-horizontal-white.png",
        phone: "+52 771 719 7601",
        phoneAlt: "771 201 3576",
        whatsapp: "527717197601",
        email: "gdsj207@gmail.com",
        address: "Blvd. Valle de San Javier #207 Int. 102, Valle de San Javier, CP 42086, Pachuca de Soto, Hgo.",
        whatsappMessage: "Hola Grupo Dental San Javier, me gustaría agendar una cita de valoración."
    },

    // 3. NAVEGACIÓN
    nav: {
        links: [
            { text: "Inicio", href: "#hero" },
            { text: "Nosotros", href: "#nosotros" },
            { text: "Servicios", href: "#servicios" },
            { text: "Doctores", href: "#doctores" },
            { text: "Contacto", href: "#contacto" }
        ],
        ctaText: "Agendar Cita"
    },

    // 4. SECCIÓN HERO
    hero: {
        topLabel: "IMPLANTOLOGÍA BUCAL & ESPECIALIDADES · PACHUCA, HGO.",
        headline: {
            part1: "Devolverte la",
            italic: "Sonrisa",
            part2: ",<br>con Salud y Estética."
        },
        carouselDescriptions: [
            "19 años de experiencia con el Dr. Horacio Islas y la Dra. Elizabeth Garrido en Valle de San Javier, Pachuca.",
            "Tecnología de punta: escáner intraoral, tecnología láser, radiografía digital y anestesia digital.",
            "Especialistas egresados de la UAEH en Periodoncia, Implantología Bucal y Odontología Estética.",
            "Todas las especialidades odontológicas reunidas en un solo lugar, con atención cálida y segura."
        ],
        buttons: {
            primary: "Agendar Cita",
            secondary: "Llamar Ahora"
        },
        carouselImages: [
            "images/google_site_images/g_img_6.jpg",
            "images/google_site_images/g_img_5.jpg",
            "images/google_site_images/g_img_4.jpg",
            "images/google_site_images/g_img_7.jpg"
        ],
        floatingTag: "Blvd. Valle de San Javier #207"
    },

    // 5. SECCIÓN NOSOTROS (01)
    about: {
        label: "Sobre Nosotros",
        number: "(01)",
        headline: {
            part1: "19 años transformando sonrisas con",
            italic1: "tecnología de vanguardia",
            part2: " y especialistas certificados enfocados en tu",
            italic2: "salud y estética",
            part3: " en Pachuca."
        },
        image: "images/google_site_images/g_img_6.jpg",
        stats: [
            { number: "19", label: "Años de Experiencia" },
            { number: "5.0⭐", label: "Calificación Google" }
        ]
    },

    // 6. SECCIÓN SERVICIOS (02) — fotos reales de cada servicio
    services: {
        label: "Nuestros Servicios",
        number: "(02)",
        list: [
            {
                id: "01",
                title: "Periodoncia e Implantes",
                subtitle: "Implantología Bucal & Salud de Encías",
                image: "images/google_site_images/g_img_4.jpg",
                description: "Reemplazo fijo de piezas perdidas con implantes dentales y tratamiento especializado de encías y soporte óseo con el Dr. Horacio Islas, especialista en Periodoncia e Implantología Bucal. Planificación con radiografía digital y anestesia digital para tu comodidad.",
                doctorsText: "Dr. Horacio Islas"
            },
            {
                id: "02",
                title: "Blanqueamiento ZOOM!",
                subtitle: "Aclaramiento Dental Clínico Philips ZOOM!",
                image: "images/google_site_images/g_img_3.jpg",
                description: "Blanqueamiento profesional en consultorio con lámpara Philips ZOOM!: resultados visibles desde la primera sesión, de forma segura y supervisada por especialistas en estética dental.",
                doctorsText: "Dra. Elizabeth Garrido"
            },
            {
                id: "03",
                title: "Odontología Estética",
                subtitle: "Diseño de Sonrisa & Odontología Restauradora",
                image: "images/instagram_scraped/ig_img_7.jpg",
                description: "La Dra. Elizabeth Garrido, especialista en Odontología Estética, perfecciona la forma, el color y la armonía de tu sonrisa con restauraciones estéticas y tratamientos de diseño de sonrisa con resultados naturales.",
                doctorsText: "Dra. Elizabeth Garrido"
            },
            {
                id: "04",
                title: "Radiografía Panorámica",
                subtitle: "Diagnóstico por Imagen en la Clínica",
                image: "images/google_site_images/g_img_10.jpg",
                description: "Contamos con equipo propio de radiografía panorámica y escáner intraoral para diagnosticar con precisión sin que tengas que trasladarte a otro gabinete.",
                doctorsText: "Grupo Dental San Javier"
            },
            {
                id: "05",
                title: "Revisión y Odontología General",
                subtitle: "Prevención, Limpieza & Odontología Integral",
                image: "images/instagram_scraped/ig_img_8.jpg",
                description: "Revisiones periódicas, limpiezas y tratamientos generales para toda la familia. Periodoncia, ortodoncia, cirugía bucal y maxilofacial, odontología estética, general y pediátrica: todas las especialidades en un solo lugar.",
                doctorsText: "Equipo San Javier"
            }
        ]
    },

    // 7. GALERÍA DE INSTALACIONES REALES
    gallery: [
        "images/google_site_images/g_img_6.jpg",
        "images/google_site_images/g_img_5.jpg",
        "images/google_site_images/g_img_7.jpg",
        "images/google_site_images/g_img_8.jpg",
        "images/google_site_images/g_img_9.jpg",
        "images/google_site_images/g_img_4.jpg"
    ],

    // 8. DOCTORES (retratos reales en alta definición 720x960)
    doctors: {
        heading: "Conoce a Nuestros Especialistas",
        list: [
            {
                name: "Dr. Horacio Islas",
                specialty: "Periodoncia e Implantología Bucal",
                image: "images/dr-horacio-islas-real.jpg",
                details: "Cirujano Dentista egresado de la Universidad Autónoma del Estado de Hidalgo (UAEH), Céd. Prof. 5153172. Especialista en Periodoncia e Implantología Bucal y fundador de Grupo Dental San Javier, con 19 años de trayectoria en Pachuca.",
                socials: {
                    instagram: "https://www.instagram.com/grupo_dental_san_javier/"
                }
            },
            {
                name: "Dra. Elizabeth Garrido",
                specialty: "Odontología Estética",
                image: "images/dra-elizabeth-garrido-real.jpg",
                details: "Cirujana Dentista egresada de la UAEH, Céd. Prof. 7311193. Especialista en Odontología Estética, diseño de sonrisa y blanqueamiento dental, codirectora de Grupo Dental San Javier.",
                socials: {
                    instagram: "https://www.instagram.com/grupo_dental_san_javier/"
                }
            }
        ]
    },

    // 9. TESTIMONIOS
    // ⚠️ PROVISIONALES: Google Maps no muestra las reseñas sin iniciar sesión.
    //    Sustituir por las reseñas reales del perfil (calificación real: 5.0).
    reviews: {
        list: [
            {
                name: "Paciente de Pachuca",
                rating: 5,
                time: "Reseña de Google",
                text: "Excelente atención del Dr. Horacio. Me explicó todo mi tratamiento de implante con la radiografía y el procedimiento fue sin dolor. Instalaciones muy limpias y modernas.",
                color: "#0066B3"
            },
            {
                name: "Paciente de Valle de San Javier",
                rating: 5,
                time: "Reseña de Google",
                text: "Me hice el blanqueamiento ZOOM con la Dra. Elizabeth y el resultado fue increíble y muy natural. Súper puntuales y amables desde la recepción.",
                color: "#78B833"
            },
            {
                name: "Familia de Pachuca",
                rating: 5,
                time: "Reseña de Google",
                text: "Llevamos años atendiéndonos aquí toda la familia. Tienen todas las especialidades en un solo lugar y el trato del equipo es muy cálido y profesional.",
                color: "#0A3D6B"
            },
            {
                name: "Paciente de Hidalgo",
                rating: 5,
                time: "Reseña de Google",
                text: "Llegué con mucho dolor y me atendieron rápido. Diagnóstico claro, tecnología moderna y me sentí en muy buenas manos. 100% recomendados.",
                color: "#0066B3"
            }
        ]
    },

    // 10. PREGUNTAS FRECUENTES
    faq: {
        heading: "Preguntas Frecuentes",
        questions: [
            {
                q: "¿Dónde se encuentra Grupo Dental San Javier?",
                a: "Estamos en Blvd. Valle de San Javier #207, Consultorio 102, Fracc. Valle de San Javier, CP 42086, Pachuca de Soto, Hidalgo."
            },
            {
                q: "¿Cuál es su horario de atención?",
                a: "Lunes a viernes de 10:00 a. m. a 8:00 p. m. y sábados de 10:00 a. m. a 3:00 p. m."
            },
            {
                q: "¿Qué especialidades ofrecen?",
                a: "Periodoncia, implantología bucal, ortodoncia, cirugía bucal y maxilofacial, odontología estética, odontología general y odontopediatría, todas en un mismo lugar."
            },
            {
                q: "¿Qué tecnología utilizan?",
                a: "Contamos con escáner intraoral, tecnología láser, radiografía digital y panorámica, anestesia digital y blanqueamiento clínico Philips ZOOM!."
            },
            {
                q: "¿Cómo agendo mi cita?",
                a: "Escríbenos por WhatsApp al 771 719 7601, llámanos o llena el formulario de esta página y te confirmamos fecha y hora."
            }
        ]
    },

    // 11. FORMULARIO Y CONTACTO
    contact: {
        heading: "Agenda Tu Cita Online.",
        labels: {
            name: "Tu Nombre Completo",
            email: "Correo Electrónico",
            service: "Seleccionar Tratamiento",
            date: "Seleccionar Fecha Preferida",
            submit: "Agendar Ahora →"
        },
        mapIframeSrc: "https://maps.google.com/maps?q=20.0985417,-98.7513434&z=17&output=embed",
        addressText: "Blvd. Valle de San Javier #207 Int. 102, Valle de San Javier, 42086 Pachuca de Soto, Hgo."
    },

    // 12. FOOTER
    footer: {
        desc: "Clínica de Implantología Bucal y Especialidades Dentales. 19 años devolviendo sonrisas en Pachuca con tecnología de punta y especialistas certificados.",
        hours: {
            week: "Lunes a Viernes: 10:00 - 20:00 hrs",
            sat: "Sábados: 10:00 - 15:00 hrs",
            sun: "Domingos: Cerrado"
        },
        copyright: "© 2026 Grupo Dental San Javier. Todos los derechos reservados."
    }
};

window.clinicConfig = clinicConfig;
