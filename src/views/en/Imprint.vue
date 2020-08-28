<template>
  <div>
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center top-margin">
            <h1 class="heading">Imprint</h1>
            <div class="customer-support">
              <h2>
                <strong>
                  <u>Customer-Support</u>
                </strong>
              </h2>
              <p class="email-address">E-Mail: support@sternenhimmel-poster.de</p>
              <div class="content">
                <h2>Information according to § 5 TMG</h2>
                <p>
                  Momentgold UG (haftungsbeschränkt)
                  <br />Mittelstraße 24
                  <br />10117 Berlin
                </p>
                <p>
                  Commercial register: HRB 218295
                  <br />Register court: Local court Berlin Charlottenburg
                </p>
                <p>
                  <strong>Represented by:</strong>
                  <br />Duong Ta
                </p>
                <h2>Contact & E-Mail</h2>
                <p>Phone: 030 715549 68</p>
                <div>
                  <strong>E-Mail: info@sternenhimmel-poster.de</strong>
                </div>
                <h2 class="mt-5">EU Dispute Resolution</h2>
                <p>
                  The European Commission provides an online dispute resolution (OS) platform:
                  <span
                    style="color: #333333;"
                  >
                    <a
                      style="color: #333333;"
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >https://ec.europa.eu/consumers/odr</a>.
                  </span>
                  <br />You will find our e-mail address at the top of the imprint.
                </p>
                <h2>Consumer dispute resolution/Universal Arbitration Body</h2>
                <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                <h3>Liability for contents</h3>
                <p>As a service provider, we are responsible for our own content on these pages according to § 7 para.1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG we are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.</p>
                <p>Obligations to remove or block the use of information according to general laws remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of any such legal infringements, we will remove the content in question immediately.</p>
                <h3>Liability for links</h3>
                <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking.</p>
                <p>owever, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.</p>
                <h3>Copyright</h3>
                <p>The contents and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use.</p>
                <p>Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.</p>
                <p>
                  <span class="quelle">
                    Source:
                    <a href="https://www.e-recht24.de">e-recht24.de</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer";

export default {
  name: "Imprint",
  components: {
    Footer,
  },
  mounted: () => {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.top-margin {
  margin-top: 75px;
}

h1.heading {
  font-weight: 600;
  color: #303030;
}

.customer-support {
  margin-top: 75px;
}

.customer-support h2 {
  font-size: 32px;
}

.content {
  margin-top: 100px;
}

.email-address {
  margin-top: 15px;
  font-weight: bolder;
  font-size: 20px;
}

p {
  font-size: 17px;
  color: #303030;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

h1,
h2 {
  word-break: break-all;
}

.quelle,
.quelle a {
  color: #999999;
}
</style>