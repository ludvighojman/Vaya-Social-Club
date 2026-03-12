export function Gallery() {
  return (
    <section className="py-32 px-8 md:px-20 bg-background-light dark:bg-background-dark">
      <div className="flex items-end justify-between mb-14">
        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-slate-900 dark:text-white">
          Snapshots of our<br/><span className="text-primary">Community</span>
        </h2>
        <p className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase text-slate-400">Lisbon, 2026</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 aspect-square md:aspect-video">
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Motion blurred runner on Lisbon cobblestones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFqqlpRA4kCmrl8YBa2PlVQAKRdMfbX4T_s-7vGlNnhuYeBilRaeW0Ld_jOw9Qakdev00lqJWaX4nytFbAaK9DXWWdZqB1WkpE8fnY6ciNWCN9iV78E_GGW3WzjPA1OEeHYKAaSdGyYsANkgNPdjDDccoGgKJHSSgr1Kb9ynNf0dMLcGFZRJsX4dgow-wNMxpF-udwFEzhXTcIjrLV_aj8yDFQgvPgkZLp_De74U_fhSkKTFoACOg-xN0iKZE_ArVBOmtAin0i0gNj" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group col-span-1 md:row-span-2">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Runner stretching with Tagus river background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9mnk5iWbWYqn_KwTYHuj_yOgO1GkSmE81lzAi6KgslXTbFgHS8SLF9-pguChICqRxvu__G5oesU35lJndmJokJdhNVeZaz5FFhadZC4DxSNk1tto47Opj5gaXTTpdCko_qtmPMvHFNPnRHCwZUT82HXRygKz_Cs9DPxRKsY1_lRsQyRNC6p_Z4QG1w02qZJphiwwalQ-FyJJ5nbxEJ54FmOkyDVrTwdTJWo3hn6C6tkijcgn0jdhS0elgRAl5kQExjrtQv8YbGA6-" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Group photo of smiling runners" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxnpSs1XyKSeh6XDiRKE4AYHxCnjYkg6hf51icd4NRgurEYQ2WaQcsQ-fsGkwrWIeQ2QXfmugzjrBtB8NepGU7KWE2-Sk9yO2wUQk45q9iyfLopJ7x72xSrL64foIkRqOZAbV2PFIPjhlOl0S46IV_mhRCkNQMalD5Mjvyj8-WVsKKmW6tY2AKatAWC3eoPGT3XoW8hIIHytaeiHCRut-upLAmxS5coeUv68uUK0c7GE6Cqn15vdRoeenlFDMpimlDwXr6SvAI5WM" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Motion blur of running legs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4UxQ4_QKkwGFtZVs3gZx7gtW-O2DrR4rb6YssSafCcN0WbTfIziv9beC43kKu11F54jqoZmZjMdfQeoj18vu1ddLwOsbw6mSz6WPDaE6Y9G2GpYxg7udOcduufFT4A_IDgtP1SzAbY6cewqlQbTUXcchS-I4PQ3Bs6tIgZ75IkRSpRlDPE2xQ5r9BIEWENjn9XUX0wzRWJziJT6nzWfmVGkwC31LEfK-wLUffrmxUU1v5xmFu9ARzV6qx76YR4uOF-jQjACryftgA" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Runner in Lisbon narrow street" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzcX6liQK7Jd6CSMmBUtyQWFN684QOFWL_JpcvfZ6ngP3XSAS5jHpq4P2SV5tb0HSnVk911duzcugsqYgzBJJEBnZOkSFfpUmCqLqvOO2a9oJgZ1SPL7OEfofOelrlq_gQc7VRj-lJOLzTwgmBsW7t0o_5cHut65DpbAnN3oshz2VfP4NIwC_QpVS4TX-rt3oZKnP7VTIrXuwpA1_j8wo99nEIWQRpdcNiPiPc8HXL5w0WTAlDxsGZqj-VGbHbm_xCVXXRGDBHfGBK" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group col-span-2">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Sunset run near 25 de Abril bridge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhF7zSvdUMgSf8mrcJdJjWuULCYIhwg-EH1j33uA6ZHQBmbpuzk6pGM8zmVNg5Mo6PTB4Mzizpv2E5flCwiBo36Nqj88rkJtGFkYvkyDXzrBQ13E_lwkvK6hzrqtRUrwnUPojetSgw6Um1Djptqrw-xTGwrtZ3bG9rb-7zeIbEIYKbrorZh7GmU9BFF4GebN2dVlFyWDlDEnLLdMJNsCuKOoKYvFITnIg0YQOmlqbxIWKtvDGxKyB9cqzQ7OrrX0x-7eqqAHM4HtnG" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Close up of running shoes on stone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBphMmTuiGp8n5tJFnFSeiXx1nXLNtyQ949dHgtfpspZ000isLlterIWO4JZbK5bPiwTJoygdebBjK9WMBPDj_sGg6PdpWSwfx0k9R9evNOsImTUY2lETohcYSZKl2oB2z7UigOxa3JZoDdEwsYN9h0YulcyEHRpqsIsCC8AvkDkpmZ8UdPQtlpiAiUChKzUk-cLYjYtvsZ0mksjr5kDq3U-M0EuVPab_eD06r1UZZ8qUhqWqCk7Wv0UEBYgTAVLowt1kQ1aox8MoYo" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Lisbon cityscape at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWnb_petAXpGfxfn4PkiRvQ6Qgq5zJL30JLu6Z8SoZfNZ5SvXGILkoDCFCYNJ1ph6BUuknLFI6nwkFgNcbjRUfw7iQArAfkK_VDEWQAoNCS0OZPcpmDjL6pUPYYzkUtlSThTf_AdsEJHPIQ2nsShYOGFH2OFPThoCR8roUe1VQ6j13oYh14rF59NBja2Kv0hGkWus9ziCHMNzQe_mNnu2uWcp2RC7tHYUyrEQkmvSUmXT3XZA-EKIf2hrPT7aEswpuCUbuDp5HqKLF" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="High energy runner action shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw629ZCWP7Ba8r5e-MLwKkjdrI9CiSX7LZdVYbzR0oNLJZBG0Jw4wBjBxdmQzB8HSVxQeadU_Uq7rnAI3QF9KUTu6uZtwNMyF1Byta600rlt6Ouix7AVaf-psXoJa3kE6OFbOjfOjoqgCZPelvhqDN9A27lXw33_hXfqpFzo42lYTB_rzumydp7gTGvDTD5McNDEWL6zktULGT7R-tru7b6GZO-T14Y5l8kl61nCbRzCg0WyNk20eubO5AHHF-1op2NouTiHZ24lj0" referrerPolicy="no-referrer" />
        </div>
        <div className="relative overflow-hidden group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Vibrant Lisbon street scene" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk48axYPsq-G9GU-qv-GouL_sRaSMgSLqvEZWkaftkYxXFe97i_I-n9CulGQrrbO1qqg61WaX6a8gCImjpGG8WmuVoAXqngs0QZbTLQyynbjiDgPALC_4GgO2XIWiLb2eqTBju4wz3QcKsjYkWDxBnjV12__0zmCBxHXpPJ1Ik8P6i_D9cxIzIfuFlQmzVbLlFfl6qEmhTAUS_z5DgBoOzFxXmza_KrAW7yHMKKcra-AVJWcqFlkppVUKk6ldZofjRctQmi4VTL51_" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}
