import { Module } from "./ModuleRunner";
import { getBuffersFromList, setSettings } from "./util";
import { Selector } from "./Selector";
import { Style, ChatDeleteStyle } from "./Style";

export class ChatDeleteButton implements Module {
    private tag = "pb-chat-delete";
	
    private pmmgSettings;
	
	constructor(pmmgSettings)
	{
        this.pmmgSettings = pmmgSettings;
	}
	

    cleanup() {
        // Nothing to clean up
    }
    run(allBuffers) {
		var buffers = getBuffersFromList("COMP ", allBuffers);
		buffers.forEach(buffer => {
			addChatDeleteToggle(buffer, this.pmmgSettings, this.tag)
		});
		
		buffers = getBuffersFromList("COMG ", allBuffers);
		buffers.forEach(buffer => {
			addChatDeleteToggle(buffer, this.pmmgSettings, this.tag)
		});
		
		buffers = getBuffersFromList("COMU ", allBuffers);
		buffers.forEach(buffer => {
			addChatDeleteToggle(buffer, this.pmmgSettings, this.tag)
		});
	}
	
}

function addChatDeleteToggle(buffer, pmmgSettings, tag)
{
	const channelControls = buffer.querySelector(Selector.ChannelControls);
	if(!channelControls || channelControls.classList.contains(tag)){return;}
	channelControls.classList.add(tag);
	
	var chatToggle = document.createElement("div");
	channelControls.appendChild(chatToggle);
	chatToggle.innerHTML = `<div class="SelectButton__container___vjN14Xf"><span class="RadioItem__container___CSczqmG"><div class="RadioItem__indicator___QzQtjhA"></div><div class="RadioItem__value___Yd1Gt1T fonts__font-regular___Sxp1xjo type__type-small___pMQhMQO">disable delete</div></span></div>`;
	
	chatToggle = chatToggle.firstChild as HTMLDivElement;
	if(!chatToggle){return;}
	
	channelControls.appendChild(chatToggle)
	
	if(pmmgSettings["PMMGExtended"]["chat_delete_hidden"])
	{
		const chatIndicator = chatToggle.querySelector(Selector.RadioIndicator) as HTMLElement;
		if(!chatIndicator){return;}
		
		chatIndicator.classList.add(...Style.RadioButtonToggled);
	}
	
	chatToggle.addEventListener("click", function() {
		pmmgSettings["PMMGExtended"]["chat_delete_hidden"] = !pmmgSettings["PMMGExtended"]["chat_delete_hidden"];

		const chatIndicator = chatToggle.querySelector(Selector.RadioIndicator) as HTMLElement;
		if(!chatIndicator){return;}

		if(pmmgSettings["PMMGExtended"]["chat_delete_hidden"])
		{
			chatIndicator.classList.remove(...Style.RadioButtonUnToggled);
			chatIndicator.classList.add(...Style.RadioButtonToggled);
			
			if(!document.getElementById("pmmg-chat-delete-style"))
			{
				// Style doesn't exist: Add it.
				const chatDelete = document.createElement("style");
				chatDelete.type = "text/css";
				chatDelete.id = "pmmg-chat-delete-style";
				chatDelete.textContent = ChatDeleteStyle;
				
				const doc = document.querySelector("html");
				if(doc){doc.appendChild(chatDelete);}
			}
		}
		else
		{
			chatIndicator.classList.remove(...Style.RadioButtonToggled);
			chatIndicator.classList.add(...Style.RadioButtonUnToggled);
			const chatStyle = document.getElementById("pmmg-chat-delete-style");
			if(chatStyle)
			{
				// Style exists: Remove it.
				chatStyle.remove();
			}
		}
		
		setSettings(pmmgSettings);
	});
}