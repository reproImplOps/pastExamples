let data = [
  {
    name: "test",
    title: "例",
    description: ``,
    js: `

    message.show();
    let 	id 			= null;
    const 	INTERVAL	= 300;
    const ele = document.querySelector(".repro-bl-iconWrapper");
    
    const onEnded = function() {
        ele.style.opacity = 1;
        id = null;
    };
    
    const onScroll = function() {
        clearTimeout( id );
        ele.style.opacity = 0.2;
        id = setTimeout( onEnded, INTERVAL );
    };
    
    window.addEventListener( 'scroll', onScroll );
    
    
    `,
    html: `<div class="repro-bl-iconWrapper">
    <div class="repro-bl-icon">
      <div class="repro-el-close-btn" data-repro--close="">
        <div class="repro-el-close-btn-border">
          <div class="repro-el-close-btn-border"></div>
        </div>
      </div>
      <div class="repro-bl-iconContainer">
        <div class="repro-el-imgWrapper">
          <div class="repro-el-linked-image" data-repro--primary-image="" data-repro--no-close=""><img src="https://placehold.jp/72x72.png" alt="" class="repro-el-img image1"></div>
        </div>
      </div>
    </div>
  </div>
  `,
    css: `.repro-bl-iconWrapper {
  box-sizing: border-box;
  font-size: 14px; }

[class^="repro-"] {
  box-sizing: border-box; }
  [class^="repro-"]::before, [class^="repro-"]::after {
    box-sizing: border-box; }

.repro-el-ttl {
  line-height: 1.2;
  word-break: break-word;
  color: #000; }

.repro-el-txt {
  line-height: 1.2;
  word-break: break-word;
  color: #000; }

.repro-el-close-btn {
  background-color: rgba(255, 255, 255, 0.49);
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 9px;
  position: absolute;
  right: 0;
  top: -23px; }

.repro-el-close-btn-border {
  height: 10px;
  width: 2px;
  transform: rotate(45deg);
  background-color: black; }

.repro-el-close-btn--edge {
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: transparent;
  box-shadow: none; }

.repro-el-close-btn-border > .repro-el-close-btn-border {
  transform: rotate(90deg); }

.repro-el-close-btn--edge .repro-el-close-btn-border {
  height: 32px;
  width: 1px;
  background-color: #fff; }

.repro-bl-columns {
  display: flex; }

.repro-bl-column {
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1; }

.repro-el-ttl {
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: left; }

.repro-el-txt {
  border: none;
  color: #303030;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  max-height: 100%;
  overflow-y: visible;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: left; }
  .repro-el-txt.body1 {
    border: none;
    color: #303030;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-height: 100%;
    overflow-y: auto;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    text-align: left; }
  .repro-el-txt.body2 {
    border: none;
    color: #303030;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-height: 100%;
    overflow-y: auto;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    text-align: left; }

.repro-el-imgWrapper {
  text-align: center;
  width: 100%;
  margin: 0 auto; }

.repro-bl-column--hasImage {
  flex: none;
  width: 100%; }
  .repro-bl-column--hasImage .repro-el-imgWrapper {
    width: 100%; }

.repro-el-img {
  border-radius: 0px;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%; }
  .repro-el-img.image1 {
    border-radius: 0px; }
  .repro-el-img.image2 {
    border-radius: 0px; }
  .repro-el-img.image3 {
    border-radius: 0px; }
  .repro-el-img.image4 {
    border-radius: 0px; }

.repro-el-img + .repro-el-img {
  margin-top: 12px; }

.repro-el-linked-image {
  display: block; }

.repro-el-img {
  border-radius: 0px; }
  .repro-el-img.image1 {
    border-radius: 2px; }
  .repro-el-img.image2 {
    border-radius: 0px; }
  .repro-el-img.image3 {
    border-radius: 0px; }
  .repro-el-img.image4 {
    border-radius: 0px; }

.repro-el-linked-image a {
  display: block; }

.repro-bl-iconWrapper {
  opacity: 0;
  transition: ease-in opacity 0.2s;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2147483647 !important;
  font-size: 0;
  pointer-events: none;
  display: flex; }

.repro-bl-icon {
  max-width: calc(100% - 64px);
  pointer-events: auto;
  position: relative;
  z-index: 101;
  margin: 32px;
  width: 56px;
  transform: translate(0px, 0px); }

.repro-bl-iconContainer {
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
  overflow: hidden;
  background-color: white;
  max-height: calc(100vh - 64px);
  border-radius: 2px; }

.repro-bl-icon .repro-el-img {
  width: 100%; }

.repro-bl-iconWrapper {
  align-items: flex-end;
  justify-content: flex-end; }
`,
    pageJs: ``,
    pageHtml: ``,
    pageCss: ``,
    tags: [],
    index: ``,
  },
];

export default data;
