import {Component} from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <>
                <div className={"header"}>
                    <h2>Pouya</h2>
                    <div className={"email"}>pshekari37@gmail.com</div>
                    <div className={"bars"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21">
                            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                                <path id="Path_2" data-name="Path 2" d="M4.5,18H25.188" transform="translate(6.312)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                <path id="Path_3" data-name="Path 3" d="M4.5,9h27" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                <path id="Path_4" data-name="Path 4" d="M4.5,27H18" transform="translate(13.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            </g>
                        </svg>

                    </div>
                </div>
                <main>
                    <div className={"information"}>
                        <h1>Hi,</h1>
                        <h1>I'm <span className={"name"}>Pouya</span></h1>
                        <h2>User Interface Designer</h2>
                        <div className={"hire"}>
                            <span>Hire me</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right"
                                 className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">

                                </path>
                            </svg>
                        </div>
                        <div className={"social-icons"}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                 className="svg-inline--fa fa-facebook-f fa-w-10" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{color: "white" , width:"1.5rem"}}>
                                <path fill="currentColor"
                                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">

                                </path>
                            </svg>

                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                                 className="svg-inline--fa fa-twitter fa-w-16" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{color: "white" , width:"1.5rem"}}>
                                <path fill="currentColor"
                                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">

                                </path>
                            </svg>

                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                 className="svg-inline--fa fa-instagram fa-w-14" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{color: "white" , width:"1.5rem"}}>
                                <path fill="currentColor"
                                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">

                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className={"picture"}>
                        <img src="https://s4.uupload.ir/files/whatsapp_image_2021-12-26_at_21.06.35_1_-removebg-preview_p59a.png" border="0" alt="picture" />
                    </div>
                    <div className={"skills"}>
                        <div style={{position:"relative"}}>
                            <div className={"first-circle"}></div>
                            <div className={"second-circle"}></div>
                            <div className={"third-circle"}></div>
                        </div>
                        <div style={{color:"lightcoral" , fontSize:"1.4rem" , margin:"5rem 0 2rem"}}>Expert on</div>
                        <h2 style={{marginBottom:"1rem"}}>Based in Iran</h2>
                        <h2 style={{marginBottom:"1rem"}}>i'am developer and</h2>
                        <h2 style={{marginBottom:"2rem"}}>UI/UX designer.</h2>
                        <p style={{fontSize:"1.2rem" , fontWeight:"400" , lineHeight:"150%"}}>Hey are looking for designer to build<br/>your brand and grow your business?<br />let's shake hand with me.</p>
                        <span style={{borderBottom:"1px solid lightcoral" , paddingBottom:"0.5rem"}}>
                            <a herf="#" style={{color:"lightcoral" , fontSize:"1.2rem" , marginRight:"1rem"}}>Download CV</a>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                 className="svg-inline--fa fa-download fa-w-16" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{color: "lightcoral" , width:"1rem"}}>
                                <path fill="currentColor"
                                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">

                                </path>
                            </svg>
                        </span>
                        <div className={"chat"}>
                            <div style={{fontSize:"1.2rem"}}>let's Chat</div>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots"
                                 className="svg-inline--fa fa-comment-dots fa-w-16" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{color: "white" , width:"2.5rem"}}>
                                <path fill="currentColor"
                                      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">

                                </path>
                            </svg>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export {Profile};