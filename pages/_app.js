import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { tsParticles } from 'tsparticles'

const Website = ({ Component, pageProps, router }) => {
  
  tsParticles.load("tsparticles2", {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
      },
        "particles": {
          "number": {
            "value": 1,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fafafa"
          },
          "shape": {
            "type": "image",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "https://i.imgur.com/vdHr7n6.png",
              "width": 1080,
              "height": 1000
            }
          },
          "opacity": {
            "value": .4,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 150,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.4,
            "direction": "topRight",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 2084.43567912518,
              "rotateY": 2244.776885211732
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 50,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "position": {
          "x": 5,
          "y": -10
        },
        "retina_detect": true
      
  });

  tsParticles.load("tsparticles", {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
      },
        "particles": {
          "number": {
            "value": 250,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fafafa"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 1.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 2084.43567912518,
              "rotateY": 2244.776885211732
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 500,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 50,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      
  });
  tsParticles.load("tsparticles1", {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
      },
        "particles": {
          "number": {
            "value": 1,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fafafa"
          },
          "shape": {
            "type": "image",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "https://i.imgur.com/ONeuMO3.png",
              "width": 1080,
              "height": 1000
            }
          },
          "opacity": {
            "value": .4,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 200,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.4,
            "direction": "top",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 2084.43567912518,
              "rotateY": 2244.776885211732
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 50,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "position": {
          "x": 15,
          "y": 5
        },
        "retina_detect": true
      
  });


  return (
    <ChakraProvider theme={theme}>

      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,

        }}
      >
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </div>
    </ChakraProvider>
  )
}

export default Website