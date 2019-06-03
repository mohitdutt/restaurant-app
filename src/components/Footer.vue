<template>
  <div>
    <div class="mt-4 footer">
      <div class="row">
        <div class="col-3 mt-2 check">
            <div class="row aboutus"><span class="textcolorgreenfontback">About Us</span></div>
            <div class="row contactus"><span class="textcolorgreenfontback">Contact Us</span></div>
        </div>
        <div class="col-8 check2">
            <div class="row mt-3 check3" style="float:right;">
              <div class="socialLink">
                  <span class="socialLinkSpan"><i class="fab fa-google-plus-g"></i></span>
              </div>
              <div class="socialLink">
                  <span class="socialLinkSpan"><i class="fab fa-facebook-f"></i></span>
              </div>
              <div class="socialLink">
                  <span class="socialLinkSpan"><i class="fab fa-twitter"></i></span>
              </div>
              <div class="socialLink">
                  <span class="socialLinkSpan">f</span>
              </div>
              <div class="socialLink">
                  <span class="socialLinkSpan">f</span>
              </div>
              <div class="socialLink">
                  <span class="socialLinkSpan">f</span>
              </div>
            </div>
        </div>
      </div>
      <div class="links"></div>
      <div class="copyright">Powered by Qexon Technologies Ltd. © 2019 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.row{
  margin: 0 !important;
}
.textcolorgreenfontback{
    color: #606e82;
    font-size: 0.85rem;
}
.socialLink{
    background-color: #606e82;
    border: 3px solid white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.socialLinkSpan{
    color: #fff;
    font-size: 23px;
    font-weight: bolder;
}
.footer {
  display: block;
  width: 100%;
  border-top: 2px solid #606e82;
}
  .links {
    text-align: left;
    color: #606e82;
    font-size: 28px;
    height: 30px;
    /* padding-top: 10px;
    margin: 10px; */
    width: 250px;
  }

  .copyright {
    background-color: #606e82;
    height: 35px;
    color: #fff;
    /* padding-top: 13px; */
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 407px) {
  .aboutus{
    display: block !important;
    float: left;
  }
  .contactus{
    display: block !important;
    float: right;
  }
  .check{
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
  .check2{
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
  .check3{
    float: none !important;
    display: -webkit-inline-box !important;
  }
}

@media (max-width: 417px) {
  .copyright{
    font-size: 13px;
  }
}
@media (min-width: 500px) {
  .textcolorgreenfontback{
    font-size: 1rem;
  }
}
</style>
