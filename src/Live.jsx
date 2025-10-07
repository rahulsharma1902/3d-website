import React, { useRef, useEffect } from 'react';
import { useFrame,useThree } from '@react-three/fiber';
import { Html, useGLTF, useScroll,ScrollControls ,Scroll} from '@react-three/drei';
import ContactForm from '../components/ContactForm';
import * as THREE from 'three';

// export function Office(props) {
  export function Office({ meshRef, ...props }) {

  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('./models/model10live.glb');
  const playButtonRef = useRef();
  const ref = useRef();
  const scroll = useScroll();
  const { gl } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = scroll.offset * -17000; // Scroll effect applied here
    }
  });
  // Create a primitive mesh (e.g., a sphere) with geometry and material
  const sphere = useRef();
  useEffect(() => {
    if (sphere.current) {
      const geometry = new THREE.SphereGeometry(1, 32, 32); // radius, widthSegments, heightSegments
      const material = new THREE.MeshBasicMaterial({ color: 'red' });
      sphere.current.geometry = geometry;
      sphere.current.material = material;
    }
  }, []);



  useEffect(() => {
    if (!playButtonRef.current) return;

    const video = document.createElement('video');
    video.src = '/video.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    playButtonRef.current.material = new THREE.MeshBasicMaterial({ map: videoTexture });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
            <mesh ref={meshRef}>
      {/* Primitive Sphere */}
      <primitive ref={sphere} object={new THREE.Mesh()} position={[0, 2, 0]} />
      <group name="Scene">
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh name="work_prev_01_0" geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
          <mesh name="work_prev_05_4" geometry={nodes.work_prev_05_4.geometry} material={materials['material-13']} position={[3438.394, 0, 0]} />
          <mesh name="work_prev_02_1" geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} />
          <mesh name="work_prev_03_2" geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} />
          <mesh name="work_prev_06_5" geometry={nodes.work_prev_06_5.geometry} material={materials['material-11']} position={[4297.993, 0, 0]} />
          <mesh name="work_prev_04_3" geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]} />
        </group>
        <group name="mouth_bott" />
        <group name="mouth_top" />
        <mesh name="Room_Frame001" geometry={nodes.Room_Frame001.geometry} material={materials['Material.032']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane163" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.029']} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Material.033']} />
        </group>
        <mesh name="Plane142" geometry={nodes.Plane142.geometry} material={materials['Material.048']} position={[4760.835, -2.09, -4306.8]} scale={157.26} />
        <group name="Cube154" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube023_1" geometry={nodes.Cube023_1.geometry} material={materials['Material.050']} />
          <mesh name="Cube023_2" geometry={nodes.Cube023_2.geometry} material={materials['Material.051']} />
        </group>
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, -9]} >
        <Html
            className="second wall"
            portal={{ current: gl.domElement.parentNode }}
            scale={100}
            // position={[-1720, 430, 0]}
          >
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                 <div className='hello-img'>
                  <img
                    src="./img/hello-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '36px', marginTop: '1rem', Top: '0', }}>About Trailblazer</h2>
                <p>Trailblazer Innovations is actually a new style of consultancy that develops the bold business idea into a businessable solution. We are both software and hardware developers with very good and extremely deep technical capabilities, while loving the future very much. Helios, our proprietary framework, allows us to embrace agility and efficiency for creative product disruption and life-empowering change in the industries.
                  <br/>Our mission is to deliver innovative, fully functional products quickly and cost-effectively, helping businesses turn their ideas into reality without the constraints of time and budget.</p>
                <a href="#" class="read-more-btn">Read More</a>
               
              </div>
            
            </Html>
            
        </mesh>
        {/* <mesh name="about_text_block001" geometry={nodes.about_text_block001.geometry} material={materials['Material.008']} position={[1715.285, 279.178, 0.029]} /> */}
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={materials['Material.003']} position={[12035.32, 385.325, -9]} scale={[1.52, 1.202, -9]} >
        <Html
         portal={{ current: gl.domElement.parentNode }}
         scale={100}
        >
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                
                <div className='hello-img'>
                  <img
                    src="./img/crown-img.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            
            </Html>
            </mesh>
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={materials['Material.014']} position={[17046.404, 398.64, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                
                <div className='hello-img'>
                  <img
                    src="./img/hello-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            
            </Html>
        </mesh>
        <mesh 
            name="contact_form_mesh" 
            geometry={nodes.hello_sign_contact.geometry} 
            material={nodes.hello_sign_contact.material} 
            position={[17596.137, 301.206, -3.029]}

            >
                <Html
                portal={{ current: gl.domElement.parentNode }}
                scale={100}
                >
                <ContactForm />
                </Html>
            
            </mesh>
        <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={materials['Material.004']} position={[2864.844, 275.825, -115.224]} />
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
              <div className='about-wall work-wall-text work-txt-wal'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '-50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
                <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
                <a href="#" class="read-more-btn">View Case</a>
              </div>
            </Html>
        </mesh>
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038,  -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
              <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, -9]} >
        <Html
        portal={{ current: gl.domElement.parentNode }}
        scale={100}
        >
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        {/* <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} /> */}
        <mesh 
          name="screen_showreel"
          ref={playButtonRef}
          geometry={nodes.screen_showreel.geometry} 
          // material={materials['material-04']} 
          position={[2865.328, 286.533, -343.739]} 
          rotation={[0, Math.PI, Math.PI]} // Keep this rotation for proper initial alignment
          scale={[-1, 1, 1]} // This will flip the mesh horizontally
        />
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[13504.598, 252.46, -9]} >
        <Html 
        portal={{ current: gl.domElement.parentNode }}
         scale={100}
           style={{
                width: '1000rem',

              }} >
            <div className='about-wall work-wall-text service-text-row'
              style={{
                width: '1000rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-40rem, -50%)',
              }}
            >
              <div className='service-text-col'  style={{
                width: '',
              }}>
              <h5>01</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Hardware Design and Development</h2>
              <p>We specialize in creating and building hardware solutions tailored to your requirements. Our work ranges from custom electronics to embedded systems. We design top-notch hardware that is innovative, compatible, dependable, and operates efficiently, striving to meet and surpass industry performance benchmarks.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>02</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Software and Platform Development</h2>
              <p>We develop software applications that are very effective and perfectly qualify our hardware innovations to ensure a total package. Custom applications, cloud-based platforms, IoT solutions; all compatible and very effective on any device or environment necessary from and after becoming a complete solution partner for any customer.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>03</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mechanical and Electrical Engineering</h2>
              <p>Our engineers bring precision and expertise to every project, whether it’s designing intricate mechanical systems or developing electrical circuits. We work closely with you to deliver integrated engineering solutions that solve real-world challenges and drive performance.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>04</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Industrial & Packaging Design</h2>
              <p>Our products encompass functionality, robustness as well as super beautiful appearance. Although beginning with sketches and 3D modeling, our designs actually fit in real-world applications. Thereafter, our design styles also guarantee that your products will be addressed in ways that will be both protective and eye-catching. Therefore, by function and branding, we give possible solutions for better user experience and highlight your great products.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>05</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Manufacturing Automation and Production</h2>
              <p>We help streamline production processes, reducing costs and time while increasing quality and efficiency. From concept to production, we leverage cutting-edge manufacturing automation techniques to deliver high-quality products at scale, on time, and within budget.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>06</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mobile App Development</h2>
              <p>Bring life, function and better experiences to iPhones or Android devices through our mobile application development expert team. Whether you really need a companion app with hardware devices or a stand-alone app solution, we can develop user-centric mobile applications to keep your customers glued to the screens.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
            </div>
          </Html>
          </mesh>
        <group name="Tex_01" position={[3133.68, 0, 0]}>
          <mesh name="Mesh075" geometry={nodes.Mesh075.geometry} material={materials.Tex_01} />
          <mesh name="Mesh075_1" geometry={nodes.Mesh075_1.geometry} material={materials.Material} />
        </group>
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials['Tex_02.003']} position={[3133.68, 0.821, 0]} />
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials['Tex_02.003']} position={[16245.512, 64.865, -444.386]} />
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials['Tex_02.003']} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials['Tex_02.003']} position={[11605.813, 126, -479.078]} />
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials['Tex_02.003']} position={[1081.763, 0.233, -483.224]} />
        <mesh name="Tex_02_013001" geometry={nodes.Tex_02_013001.geometry} material={materials['Tex_02.003']} position={[5118.79, 0.809, -943.769]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013002" geometry={nodes.Tex_02_013002.geometry} material={materials['Tex_02.003']} position={[5838.679, -7.546, -2357.005]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013003" geometry={nodes.Tex_02_013003.geometry} material={materials['Tex_02.003']} position={[5756.42, 9.668, -4932.664]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013004" geometry={nodes.Tex_02_013004.geometry} material={materials['Tex_02.003']} position={[4894.645, -11.089, -5009.29]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013005" geometry={nodes.Tex_02_013005.geometry} material={materials['Tex_02.003']} position={[3973.126, -9.97, -2377.077]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013006" geometry={nodes.Tex_02_013006.geometry} material={materials['Tex_02.003']} position={[3964.04, -16.922, -1073.194]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013007" geometry={nodes.Tex_02_013007.geometry} material={materials['Tex_02.003']} position={[5827.484, -11.808, -1068.832]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013008" geometry={nodes.Tex_02_013008.geometry} material={materials['Tex_02.003']} position={[4744.782, -10.183, -4163.47]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_013009" geometry={nodes.Tex_02_013009.geometry} material={materials['Tex_02.003']} position={[3910.45, 1.429, -4172.413]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials['Tex_02.003']} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials['Tex_02.003']} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials['Tex_02.003']} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials['Tex_02.003']} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials['Tex_02.003']} position={[4642.812, 57.755, -441.286]} />
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials['Tex_02.003']} position={[1082.439, 21.396, -479.564]} />
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials['Tex_02.003']} position={[16045.839, 286.533, -85.96]} />
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials['Tex_02.003']} position={[2402.937, 33.262, -189.113]} />
        <mesh name="Tex_02_002002" geometry={nodes.Tex_02_002002.geometry} material={materials['Tex_02.003']} position={[3332.325, 33.445, -191.833]} rotation={[-Math.PI, 0.018, -Math.PI]} />
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials['Tex_02.003']} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} />
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.628, -0.57, -4.082]} scale={325.173} />
        {/* <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.005']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} /> */}
        <mesh name="portfolio_text_01001" geometry={nodes.portfolio_text_01001.geometry} material={materials['Material.007']} position={[3432.225, 316.713, -261.516]} rotation={[0, -1.528, 0]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_01002" geometry={nodes.portfolio_text_01002.geometry} material={materials['Material.006']} position={[2296.807, 315.353, -260.52]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_06001" geometry={nodes.portfolio_text_06001.geometry} material={materials['Material.013']} position={[10895.171, 290.826, -263.851]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="portfolio_text_06002" geometry={nodes.portfolio_text_06002.geometry} material={materials['Material.012']} position={[11743.628, 299.703, -273.591]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="mouth_top_pac_&_ghost_0" geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
        <mesh name="Text_Var_02001" geometry={nodes.Text_Var_02001.geometry} material={materials.Tex_03} position={[94.949, 48.596, -6.811]} scale={[227.154, 273.451, 329.405]} />
        <mesh name="Mesh_0" geometry={nodes.Mesh_0.geometry} material={materials['Material_0.002']} position={[11208.683, 129.967, -272.814]} scale={129.706} />
        <mesh name="Tex_02_004001" geometry={nodes.Tex_02_004001.geometry} material={materials['Tex_02.003']} position={[7071.491, -12.32, -652.565]} />
        <mesh name="Tex_02_019001" geometry={nodes.Tex_02_019001.geometry} material={materials['Tex_02.003']} position={[5120.63, 21.972, -940.533]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_003001" geometry={nodes.Tex_02_003001.geometry} material={materials['Tex_02.003']} position={[4871.04, 114.041, -646.055]} scale={[1, 1, 2.442]} />
        <mesh name="Tex_02_003002" geometry={nodes.Tex_02_003002.geometry} material={materials['Tex_02.003']} position={[5295.009, 105.261, -718.575]} rotation={[Math.PI, -0.08, Math.PI]} />
        <mesh name="Tex_02_003004" geometry={nodes.Tex_02_003004.geometry} material={materials['Tex_02.003']} position={[5409.997, 114.1, -5248.11]} rotation={[Math.PI, -1.479, Math.PI]} scale={[0.882, 1.002, 1.968]} />
        <mesh name="Tex_02_019002" geometry={nodes.Tex_02_019002.geometry} material={materials['Tex_02.003']} position={[5838.679, 13.617, -2357.005]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019003" geometry={nodes.Tex_02_019003.geometry} material={materials['Tex_02.003']} position={[5756.42, 30.831, -4928.267]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019004" geometry={nodes.Tex_02_019004.geometry} material={materials['Tex_02.003']} position={[4896.961, 10.075, -5012.967]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019005" geometry={nodes.Tex_02_019005.geometry} material={materials['Tex_02.003']} position={[3974.967, 11.194, -2373.841]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019006" geometry={nodes.Tex_02_019006.geometry} material={materials['Tex_02.003']} position={[3965.881, 4.241, -1069.958]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019007" geometry={nodes.Tex_02_019007.geometry} material={materials['Tex_02.003']} position={[5829.325, 9.355, -1065.596]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019008" geometry={nodes.Tex_02_019008.geometry} material={materials['Tex_02.003']} position={[4744.782, 10.98, -4159.075]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_019009" geometry={nodes.Tex_02_019009.geometry} material={materials['Tex_02.003']} position={[3910.45, 22.593, -4168.016]} rotation={[0, 0.335, 0]} />
        {/* <mesh name="about_text_block003" geometry={nodes.about_text_block003.geometry} material={materials['Material.095']} position={[1715.285, 279.178, 0.029]} /> */}
        <mesh name="Tex_02_007001" geometry={nodes.Tex_02_007001.geometry} material={materials['Tex_02.003']} position={[2736.09, 0, -3664.21]} />
        <mesh name="Tex_02_008001" geometry={nodes.Tex_02_008001.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <group name="Table002" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane022_1" geometry={nodes.Plane022_1.geometry} material={materials['Material.095']} />
          <mesh name="Plane022_2" geometry={nodes.Plane022_2.geometry} material={materials['Material.052']} />
          <mesh name="Plane022_3" geometry={nodes.Plane022_3.geometry} material={materials['Material.078']} />
        </group>
        <mesh name="Table003" geometry={nodes.Table003.geometry} material={materials['Material.060']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plant2001">
          <mesh name="Plantt2" geometry={nodes.Plantt2.geometry} material={materials['plant t.']} />
          <mesh name="Plantt2_1" geometry={nodes.Plantt2_1.geometry} material={materials['PLant t3']} />
        </group>
        <mesh name="Plane135" geometry={nodes.Plane135.geometry} material={materials['Material.015']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane136" geometry={nodes.Plane136.geometry} material={materials['Material.049']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane144" geometry={nodes.Plane144.geometry} material={materials['Material.059']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane146" geometry={nodes.Plane146.geometry} material={nodes.Plane146.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane156" geometry={nodes.Plane156.geometry} material={materials['Material.020']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Main_Room001" geometry={nodes.Main_Room001.geometry} material={materials.Tex_01} position={[4760.83, -2.09, -4306.8]} scale={157.26} />
        {/* <mesh name="Mac010" geometry={nodes.Mac010.geometry} material={materials['Material.026']} position={[4760.835, -2.09, -4306.802]} scale={157.26} /> */}
        {/* <group name="Mac016" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane184" geometry={nodes.Plane184.geometry} material={materials['Material.082']} />
          <mesh name="Plane184_1" geometry={nodes.Plane184_1.geometry} material={materials['Material.022']} />
          <mesh name="Plane184_2" geometry={nodes.Plane184_2.geometry} material={materials['Material.023']} />
        </group> */}
        {/* <mesh name="Mac018" geometry={nodes.Mac018.geometry} material={materials['Material.110']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac019" geometry={nodes.Mac019.geometry} material={materials['Material.111']} position={[4760.835, -2.09, -4306.802]} scale={157.26} /> */}
        <group name="Cylinder028" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube016" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube018_2" geometry={nodes.Cube018_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.018']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.017']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Material.031']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve001" geometry={nodes.Cube010_Curve001.geometry} material={materials['Material.036']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube152" geometry={nodes.Cube152.geometry} material={materials.Tex_03} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Concrete001" geometry={nodes.Concrete001.geometry} material={materials['Material.047']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.034']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="2nd_room001" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube174" geometry={nodes.Cube174.geometry} material={materials['Material.002']} />
          <mesh name="Cube174_1" geometry={nodes.Cube174_1.geometry} material={materials['Material.001']} />
        </group>
        <group name="Book013" position={[5345.53, -69.061, -4259.332]} scale={157.26}>
          <mesh name="Cube175" geometry={nodes.Cube175.geometry} material={materials['Material.054']} />
          <mesh name="Cube175_1" geometry={nodes.Cube175_1.geometry} material={materials['Material.055']} />
          <mesh name="Cube175_2" geometry={nodes.Cube175_2.geometry} material={materials['Material.056']} />
          <mesh name="Cube175_3" geometry={nodes.Cube175_3.geometry} material={materials['Material.057']} />
        </group>
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.117']} position={[5884.819, 248.247, -4579.964]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.119']} position={[5884.252, 262.333, -2037.517]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="Material_002-material" geometry={nodes['Material_002-material'].geometry} material={materials['Material.009']} />
        <mesh name="Material_003-material002" geometry={nodes['Material_003-material002'].geometry} material={materials['Material.010']} />
        <mesh name="pac_man_machine_automat_0" geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat} position={[11449.857, 1.07, -258.799]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.183, 8.02, 5.095]} />
        <mesh name="scheibe_scheibe_0" geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} position={[11449.857, 1.07, -258.799]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.862, 8.02, 6.154]} />
        <mesh name="Mesh_FlagPole1_Mat_Flag_0001" geometry={nodes.Mesh_FlagPole1_Mat_Flag_0001.geometry} material={materials['Mat_Flag.001']} position={[15844.34, 91.408, -459.624]} scale={[1.427, 1.726, 1.094]} />
        <mesh name="Mesh_FlagPole1_Mat_FlagPole_0001" geometry={nodes.Mesh_FlagPole1_Mat_FlagPole_0001.geometry} material={materials['Mat_FlagPole.001']} position={[15844.34, 91.408, -459.624]} scale={[1.134, 1.726, 1.094]} />
        <mesh name="geometry_0" geometry={nodes.geometry_0.geometry} material={materials.Material_0} position={[3335.908, 82.197, -255.886]} rotation={[1.188, -1.272, 1.203]} scale={[213.195, 210.271, 213.195]} />
        <mesh name="geometry_0001" geometry={nodes.geometry_0001.geometry} material={materials['Material_0.001']} position={[2385.326, 75.118, -125.523]} rotation={[-3.134, 1.374, 3.134]} scale={276.247} />
        <mesh name="Mesh1_Mesh1003_Material001_0" geometry={nodes.Mesh1_Mesh1003_Material001_0.geometry} material={materials['Material.011']} position={[5655.122, 156.281, -4951.492]} scale={[171.001, 155.232, 156.557]} />
        <mesh name="geometry_0003" geometry={nodes.geometry_0003.geometry} material={materials['Material_0.003']} position={[5032.706, 129.001, -3587.629]} rotation={[0, -0.009, 0]} scale={[251.123, 238.391, 251.146]} />
        <mesh name="geometry_0004" geometry={nodes.geometry_0004.geometry} material={materials['Material_0.004']} position={[4583.258, 144.348, -3997.325]} rotation={[-Math.PI, 0, 3.13]} scale={[-317.535, 283.416, 330.739]} />
      </group>
      </mesh>

    </group>
  )
}

useGLTF.preload('./models/model10live.glb')
