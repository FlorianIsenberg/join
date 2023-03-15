// NOTE -- Contact basic page

function generateContactHTML() {
    return /*html*/`
    <div id="contactsheaderId" class="contactsheadercl">
        <div id="contactstextleftId" class="contactstextleftcl">Contacts</div>
        <div id="dividinglineId" class="dividinglinecl"></div>
        <div id="contactstextrightId" class="contactstextrightcl">Better with a team</div>
    </div> <!-- Frame 40 -->
    <div id="addcontactId" class="addcontactcl" onclick="overlayAddContact()">
    <!-- <div id="addcontactId" class="addcontactcl" onclick="overlayEditContact()">    -->
    <!-- <div id="addcontactId" class="addcontactcl" onclick="contactShowContact()"> -->
    <!-- <div id="addcontactId" class="addcontactcl" onclick="contactSuccesButton()"> -->
        <div id="addnewcontactId" class="addnewcontactcl">New Contact</div>
            <div id="addnewcontactpicId" class="addnewcontactpiccl">
                <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7476 16.8502C11.1453 16.8502 9.5789 16.3751 8.2466 15.4848C6.9143 14.5946 5.87589 13.3293 5.2627 11.8489C4.64951 10.3686 4.48907 8.73961 4.80167 7.16805C5.11427 5.59649 5.88588 4.15292 7.01891 3.01989C8.15194 1.88685 9.59551 1.11525 11.1671 0.802647C12.7386 0.490044 14.3676 0.650483 15.848 1.26368C17.3284 1.87687 18.5936 2.91527 19.4839 4.24758C20.3741 5.57988 20.8492 7.14625 20.8492 8.74859C20.8445 10.8958 19.9894 12.9537 18.4711 14.4721C16.9528 15.9904 14.8948 16.8455 12.7476 16.8502ZM12.7476 2.44734C11.5013 2.44734 10.2831 2.8169 9.24683 3.50929C8.21059 4.20168 7.40294 5.1858 6.92601 6.33721C6.44909 7.48861 6.3243 8.75558 6.56744 9.97791C6.81057 11.2002 7.41071 12.323 8.29196 13.2043C9.1732 14.0855 10.296 14.6856 11.5183 14.9288C12.7406 15.1719 14.0076 15.0471 15.159 14.5702C16.3104 14.0933 17.2945 13.2856 17.9869 12.2494C18.6793 11.2131 19.0489 9.99487 19.0489 8.74859C19.0489 7.0774 18.385 5.47465 17.2033 4.29293C16.0216 3.11122 14.4188 2.44734 12.7476 2.44734Z" fill="white"/>
                    <path d="M19.0478 30.353H0L0.162032 29.3088C0.558825 26.1625 2.07379 23.2639 4.43041 21.142C6.78702 19.02 9.82811 17.8163 12.9986 17.7505C14.6383 17.7361 16.265 18.0419 17.7875 18.6507C17.9008 18.6936 18.0043 18.7589 18.0917 18.8428C18.1791 18.9267 18.2488 19.0273 18.2964 19.1387C18.344 19.2501 18.3686 19.37 18.3688 19.4911C18.3689 19.6123 18.3446 19.7322 18.2974 19.8438C18.2501 19.9553 18.1808 20.0562 18.0936 20.1403C18.0064 20.2244 17.9031 20.29 17.79 20.3333C17.6768 20.3765 17.5561 20.3965 17.435 20.392C17.3139 20.3875 17.195 20.3586 17.0854 20.307C15.7907 19.7654 14.402 19.484 12.9986 19.4788C10.4471 19.5424 7.99185 20.4661 6.03111 22.1C4.07036 23.734 2.71909 25.9824 2.19644 28.4806H19.1018C19.3406 28.4806 19.5695 28.5755 19.7383 28.7443C19.9072 28.9131 20.002 29.1421 20.002 29.3808C20.002 29.6195 19.9072 29.8485 19.7383 30.0173C19.5695 30.1861 19.3406 30.281 19.1018 30.281L19.0478 30.353Z" fill="white"/>
                    <path d="M25.7984 15.9495C24.4081 15.9504 23.0478 16.3539 21.8817 17.111C20.7157 17.8682 19.7937 18.9467 19.2271 20.2163C18.8069 21.1373 18.5919 22.1386 18.597 23.1509C18.597 24.5752 19.0194 25.9675 19.8107 27.1518C20.602 28.3361 21.7267 29.2591 23.0426 29.8042C24.3585 30.3492 25.8064 30.4918 27.2034 30.214C28.6003 29.9361 29.8835 29.2502 30.8906 28.2431C31.8978 27.2359 32.5836 25.9528 32.8615 24.5558C33.1394 23.1589 32.9968 21.7109 32.4517 20.395C31.9067 19.0791 30.9836 17.9544 29.7994 17.1631C28.6151 16.3718 27.2228 15.9495 25.7984 15.9495ZM29.3992 24.1231H26.7706V26.7516C26.7706 27.0095 26.6682 27.2567 26.4859 27.4391C26.3036 27.6214 26.0563 27.7238 25.7984 27.7238C25.5406 27.7238 25.2933 27.6214 25.111 27.4391C24.9287 27.2567 24.8263 27.0095 24.8263 26.7516V24.0511H22.1977C22.0701 24.0511 21.9436 24.0259 21.8257 23.9771C21.7077 23.9282 21.6006 23.8566 21.5103 23.7663C21.42 23.6761 21.3484 23.5689 21.2995 23.4509C21.2507 23.333 21.2255 23.2066 21.2255 23.0789C21.2247 22.9053 21.2711 22.7348 21.36 22.5857C21.4488 22.4366 21.5766 22.3146 21.7296 22.2327C21.8687 22.1428 22.0324 22.0988 22.1977 22.1067H24.8263V19.5502C24.8263 19.2923 24.9287 19.0451 25.111 18.8627C25.2933 18.6804 25.5406 18.578 25.7984 18.578C26.0563 18.578 26.3036 18.6804 26.4859 18.8627C26.6682 19.0451 26.7706 19.2923 26.7706 19.5502V22.2507H29.3992C29.657 22.2507 29.9043 22.3531 30.0866 22.5355C30.2689 22.7178 30.3714 22.9651 30.3714 23.2229C30.3714 23.4808 30.2689 23.728 30.0866 23.9104C29.9043 24.0927 29.657 24.1951 29.3992 24.1951V24.1231Z" fill="white"/>
                </svg>
            </div>
        </div>

    `;
}

// NOTE -- contact Add page overlay

function generateOverlayAddContactHTML() { 
    return /*html*/`
    <div id="addcontactleftId" class="addcontactleftcl"> <!-- Frame 194 -->
        <div id="joinlogoId" class="joinlogocl">  <!-- Join Logo left side-->
            <svg width="56" height="67" viewBox="0 0 56 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.9968 0H27.7868V13.8957H39.9968V0Z" fill="white" />
                <path d="M27.7868 25.197H39.9968V44.7947C40.0526 49.5105 38.6958 54.1362 36.099 58.0839C33.5349 61.9194 28.5852 66.4829 19.4277 66.4829C9.45305 66.4829 3.63922 61.8167 0.502197 59.2597L8.20388 49.8621C11.2658 52.3352 14.2149 54.3696 19.4746 54.3696C23.457 54.3696 25.0443 52.7645 25.9741 51.3646C27.2382 49.4203 27.892 47.1465 27.8526 44.8321L27.7868 25.197Z" fill="white" />
                <path d="M21.5597 16.4248H9.34973V28.5567H21.5597V16.4248Z" fill="#29ABE2" />
                <path d="M46.3929 60.7903C46.3929 63.3753 45.0686 64.7658 43.2183 64.7658C41.368 64.7658 40.1564 63.114 40.1564 60.9209C40.1564 58.7279 41.4056 56.9921 43.3216 56.9921C45.2377 56.9921 46.3929 58.6999 46.3929 60.7903ZM41.5747 60.8929C41.5747 62.4514 42.204 63.5993 43.2841 63.5993C44.3642 63.5993 44.9747 62.3861 44.9747 60.7996C44.9747 59.4091 44.4111 58.1026 43.2841 58.1026C42.157 58.1026 41.5747 59.3625 41.5747 60.8929Z" fill="white" />
                <path d="M48.8161 57.104V64.6445H47.4636V57.104H48.8161Z" fill="white" />
                <path d="M50.2814 64.6445V57.104H51.7841L53.3996 60.2116C53.8155 61.0242 54.1855 61.8592 54.5079 62.7127C54.4234 61.7795 54.3858 60.7063 54.3858 59.5117V57.104H55.6256V64.6445H54.2261L52.5919 61.4715C52.1592 60.638 51.7735 59.7812 51.4366 58.9051C51.4366 59.8384 51.5024 60.8929 51.5024 62.1901V64.6351L50.2814 64.6445Z" fill="white" />
            </svg>
        </div>  
        <div id="addcontactheaderId" class="addcontactheadercl">Add contact</div>
        <div id="addcontactsecheaderId" class="addcontactsecheadercl">Task are better with a team!</div>
        <div id="addcontactlineId" class="addcontactlinecl"></div>
    </div>

    <div id="addcontactrightId" class="addcontactrightcl">
        <div id="closecrossId" class="closecrosscl"  onclick="AddContactCancel()">
            <!-- NOTE -- Close Cross -->
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9616 7.65393L7.65388 22.9617" stroke="#2A3647" stroke-width="2" stroke-linecap="round" />
                <path d="M22.8172 23.1061L7.50941 7.79832" stroke="#2A3647" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    </div>

    <div id="addcontactrightinsideId" class="addcontactrightinsidecl">
        <!-- NOTE -- Avatar -->
        <div id="avatarpicId" class="avatarpiccl">
            <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_576_4834)">
                    <rect x="7" y="7" width="120" height="120" rx="60" fill="white" />
                    <circle cx="67" cy="67" r="60" fill="#D1D1D1" />
                    <path d="M46.3333 92.8334C46.3333 87.3522 48.5107 82.0956 52.3865 78.2198C56.2622 74.3441 61.5189 72.1667 67 72.1667C72.4811 72.1667 77.7378 74.3441 81.6135 78.2198C85.4893 82.0956 87.6667 87.3522 87.6667 92.8334H82.5C82.5 88.7225 80.867 84.78 77.9602 81.8732C75.0533 78.9664 71.1109 77.3334 67 77.3334C62.8891 77.3334 58.9467 78.9664 56.0398 81.8732C53.133 84.78 51.5 88.7225 51.5 92.8334H46.3333ZM67 69.5834C58.4363 69.5834 51.5 62.6471 51.5 54.0834C51.5 45.5196 58.4363 38.5834 67 38.5834C75.5638 38.5834 82.5 45.5196 82.5 54.0834C82.5 62.6471 75.5638 69.5834 67 69.5834ZM67 64.4167C72.7092 64.4167 77.3333 59.7925 77.3333 54.0834C77.3333 48.3742 72.7092 43.75 67 43.75C61.2908 43.75 56.6667 48.3742 56.6667 54.0834C56.6667 59.7925 61.2908 64.4167 67 64.4167Z" fill="white" />
                    <rect x="5.5" y="5.5" width="123" height="123" rx="61.5" stroke="white" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_d_576_4834" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feflood flood-opacity="0" result="BackgroundImageFix" />
                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feoffset />
                        <fegaussianblur stdDeviation="2" />
                        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_4834" />
                        <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_4834" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>

        <!-- NOTE -- Input Fields -->

        <!-- Inputfields Frame 14 -->
        <!-- <div id="addcontactrightmainId" class="addcontactrightmaincl"> -->
            <div id="addcontactrightinputfieldsId" class="addcontactrightinputfieldscl">
                <div id="addcontactnameinputId" class="addcontactnameinputcl">
                    <input id="addcontactinputnameId" class="addcontactinputnamecl" required type="text" placeholder="Name">
                </div>
                <div id="addcontactemailinputId" class="addcontactemailinputcl">
                    <input id="addcontactinputemailId" class="addcontactinputemailcl" required type="email" placeholder="Email">
                </div>
                <div id="addcontactphoneinputId" class="addcontactphoneinputcl">
                    <input id="addcontactinputphoneId" class="addcontactinputphonecl" type="tel" placeholder="Phone">
                </div>
            </div>

    </div>

    <!-- NOTE -- Sub-buttons - cancel and create -->

    <div id="subbuttoncontainerId" class="subbuttoncontainercl">
        <div id="subbuttoncancelId" class="subbuttoncancelcl" onclick="AddContactCancel()"> <!-- Cancel-Button -->
            <div id="addcontactcanceltextId" class="addcontactcanceltextcl">Cancel</div>
            <div id="addcontactcancelcrossId" class="addcontactcancelcrosscl">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9616 7.65393L7.65388 22.9617" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                    <path d="M22.8172 23.1061L7.50941 7.79832" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <div id="subbuttoncreateId" class="subbuttoncreatecl" onclick="AddCreateContact2()"> <!-- Create-Button AddCreateContact2-->
            <div id="addcontactcreatetextId" class="addcontactcreatetextcl">Create contact</div>
            <div id="addcontactcreateokId" class="addcontactcreateokcl">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.5L7 13.5L17 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                            
            </div>
        </div>
    </div>
    `;
}


// NOTE -- contact Edit page overlay

function generateOverlayEditContactHTML(showId) { 
    return /*html*/`
    <div id="addcontactleftId" class="addcontactleftcl"> <!-- Frame 194 -->
        <div id="joinlogoId" class="joinlogocl">  <!-- Join Logo left side-->
            <svg width="56" height="67" viewBox="0 0 56 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.9968 0H27.7868V13.8957H39.9968V0Z" fill="white" />
                <path d="M27.7868 25.197H39.9968V44.7947C40.0526 49.5105 38.6958 54.1362 36.099 58.0839C33.5349 61.9194 28.5852 66.4829 19.4277 66.4829C9.45305 66.4829 3.63922 61.8167 0.502197 59.2597L8.20388 49.8621C11.2658 52.3352 14.2149 54.3696 19.4746 54.3696C23.457 54.3696 25.0443 52.7645 25.9741 51.3646C27.2382 49.4203 27.892 47.1465 27.8526 44.8321L27.7868 25.197Z" fill="white" />
                <path d="M21.5597 16.4248H9.34973V28.5567H21.5597V16.4248Z" fill="#29ABE2" />
                <path d="M46.3929 60.7903C46.3929 63.3753 45.0686 64.7658 43.2183 64.7658C41.368 64.7658 40.1564 63.114 40.1564 60.9209C40.1564 58.7279 41.4056 56.9921 43.3216 56.9921C45.2377 56.9921 46.3929 58.6999 46.3929 60.7903ZM41.5747 60.8929C41.5747 62.4514 42.204 63.5993 43.2841 63.5993C44.3642 63.5993 44.9747 62.3861 44.9747 60.7996C44.9747 59.4091 44.4111 58.1026 43.2841 58.1026C42.157 58.1026 41.5747 59.3625 41.5747 60.8929Z" fill="white" />
                <path d="M48.8161 57.104V64.6445H47.4636V57.104H48.8161Z" fill="white" />
                <path d="M50.2814 64.6445V57.104H51.7841L53.3996 60.2116C53.8155 61.0242 54.1855 61.8592 54.5079 62.7127C54.4234 61.7795 54.3858 60.7063 54.3858 59.5117V57.104H55.6256V64.6445H54.2261L52.5919 61.4715C52.1592 60.638 51.7735 59.7812 51.4366 58.9051C51.4366 59.8384 51.5024 60.8929 51.5024 62.1901V64.6351L50.2814 64.6445Z" fill="white" />
            </svg>
        </div>  
        <div id="addcontactheaderId" class="addcontactheadercl">Edit contact</div>
        <!-- <div id="addcontactsecheaderId" class="addcontactsecheadercl">Task are better with a team!</div> -->
        <div id="addcontactlineId" class="addcontactlinecl"></div>
    </div>

    <div id="addcontactrightId" class="addcontactrightcl">
        <div id="closecrossId" class="closecrosscl"  onclick="EditContactCancel2()">
            <!-- NOTE -- Close Cross -->
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9616 7.65393L7.65388 22.9617" stroke="#2A3647" stroke-width="2" stroke-linecap="round" />
                <path d="M22.8172 23.1061L7.50941 7.79832" stroke="#2A3647" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    </div>

    <div id="addcontactrightinsideId" class="addcontactrightinsidecl">
        <!-- NOTE -- Avatar -->
        <div id="avatarpicId" class="avatarpiccl">
            <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_576_4834)">
                    <rect x="7" y="7" width="120" height="120" rx="60" fill="white" />
                    <circle cx="67" cy="67" r="60" fill="#D1D1D1" />
                    <path d="M46.3333 92.8334C46.3333 87.3522 48.5107 82.0956 52.3865 78.2198C56.2622 74.3441 61.5189 72.1667 67 72.1667C72.4811 72.1667 77.7378 74.3441 81.6135 78.2198C85.4893 82.0956 87.6667 87.3522 87.6667 92.8334H82.5C82.5 88.7225 80.867 84.78 77.9602 81.8732C75.0533 78.9664 71.1109 77.3334 67 77.3334C62.8891 77.3334 58.9467 78.9664 56.0398 81.8732C53.133 84.78 51.5 88.7225 51.5 92.8334H46.3333ZM67 69.5834C58.4363 69.5834 51.5 62.6471 51.5 54.0834C51.5 45.5196 58.4363 38.5834 67 38.5834C75.5638 38.5834 82.5 45.5196 82.5 54.0834C82.5 62.6471 75.5638 69.5834 67 69.5834ZM67 64.4167C72.7092 64.4167 77.3333 59.7925 77.3333 54.0834C77.3333 48.3742 72.7092 43.75 67 43.75C61.2908 43.75 56.6667 48.3742 56.6667 54.0834C56.6667 59.7925 61.2908 64.4167 67 64.4167Z" fill="white" />
                    <rect x="5.5" y="5.5" width="123" height="123" rx="61.5" stroke="white" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_d_576_4834" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feflood flood-opacity="0" result="BackgroundImageFix" />
                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feoffset />
                        <fegaussianblur stdDeviation="2" />
                        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_576_4834" />
                        <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_576_4834" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>

        <!-- NOTE -- Input Fields -->

        <!-- Inputfields Frame 14 -->
        <!-- <div id="addcontactrightmainId" class="addcontactrightmaincl"> -->
            <div id="addcontactrightinputfieldsId" class="addcontactrightinputfieldscl">
                <div id="addcontactnameinputId" class="addcontactnameinputcl">
                    <input id="addcontactinputnameId" class="addcontactinputnamecl" required type="text" placeholder="Name" value="${contactdata[showId]}">
                </div>
                <div id="addcontactemailinputId" class="addcontactemailinputcl">
                    <input id="addcontactinputemailId" class="addcontactinputemailcl" required type="email" placeholder="Email" value="${contactdata[showId+1]}">
                </div>
                <div id="addcontactphoneinputId" class="addcontactphoneinputcl">
                    <input id="addcontactinputphoneId" class="addcontactinputphonecl" type="tel" placeholder="Phone"  value="${contactdata[showId+2]}">
                </div>
            </div>

    </div>

    <!-- NOTE -- Sub-buttons - cancel and create -->

    <div id="subbuttoncontainersaveId" class="subbuttoncontainersavecl">
        <div id="subbuttonsaveId" class="subbuttonsavecl" onclick="EditSaveContact()"> <!-- Cancel-Button -->
            <div id="editcontactsaveId" class="editcontactsavecl">Save</div>
        </div>
    </div>
    `;
}

function generateOverlayShowContactHTML(showId) { 
    return /*html*/`
    <div id="showcontactmainId" class="showcontactmaincl">

        <div id="showcontacttopId" class="showcontacttopcl">
            <div id="showcontactavatarId" class="showcontactavatarcl ${contactdata[showId + 3]}">${contactdata[showId+4]}</div> <!-- Hier die Buchstaben über eine Funktion einsetzten für die Anfangsbuchstaben aus der DB -->
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="60" fill="#FF7A00"/>
                </svg>
            <div>
                <div id="showcontactnameId" class="showcontactnamecl">${contactdata[showId]}</div>
                <div id="showcontactaddtaskId" class="showcontactaddtaskcl">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1V16" stroke="#29ABE2" stroke-width="2" stroke-linecap="round"/>
                        <path d="M16 8.64148L1 8.64148" stroke="#29ABE2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Add Task
                </div>
            </div>
        </div>

        <div id="showcontactmiddleId" class="showcontactmiddlecl">
            <div id="showcontactinfoId" class="showcontactinfocl">Contact Information</div>
            <div id="showcontacteditcontactId" class="showcontacteditcontactcl" onclick="overlayEditContactPre(showId)">
                <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.87121 22.0156L7.69054 24.9405L20.3337 4.10842C20.6203 3.63628 20.4698 3.02125 19.9977 2.73471L16.8881 0.847482C16.4159 0.56094 15.8009 0.711391 15.5144 1.18353L2.87121 22.0156Z" fill="#2A3647"/>
                <path d="M2.28614 22.9794L7.10547 25.9043L2.37685 28.1892L2.28614 22.9794Z" fill="#2A3647"/>
                </svg>
                Edit Contact</div>
        </div>

        <div id="showcontactbottomId" class="showcontactbottomcl">
            <div>
            <div id="showcontactmailId" class="showcontactmailcl">Email</div>
            <div id="showcontactmaildataId" class="showcontactmaildatacl">${contactdata[showId+1]}</div>
            </div>
            <div>
            <div id="showcontactphoneId" class="showcontactphonecl">Phone</div>
            <div id="showcontactphonedataId" class="showcontactphonedatacl">${contactdata[showId+2]}</div> <!-- Planetenvorwahl nicht vergessen :-) -->
            </div>
        </div>

    </div>
    `;
}

// NOTE -- Success button

function generateSuccessbuttonHTML() {
    return /*html*/`
    <div id="successButttonmainId" class="successButtonmaincl">
    <div id="successButtoncontentId" class="successButtoncontentcl">Contact successfully created</div>
    </div>
    `;
 
}

// NOTE -- Show Contacts 

function generateShowRegisterHTML() {
    return /*html*/ `
    <!-- <div id="showRegisterId" class="showRegistercl">Alphabet</div> -->
    <div id="contactleftframeV1Id" class="contactleftframeV1cl">

    </div>
    `;
}
