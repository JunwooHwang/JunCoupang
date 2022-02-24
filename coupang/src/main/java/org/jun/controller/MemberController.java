package org.jun.controller;

import org.jun.domain.MemberDTO;
import org.jun.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MemberController {
	@Autowired
	private MemberService mservice;
	
	@GetMapping("member")
	public String member() {
		return "member/member";
	}
	
	@PostMapping("member")
	public String member(MemberDTO mdto) {
		mservice.insert(mdto);
		return "redirect:/";
	}
	
	@ResponseBody
	@PostMapping("memberAjax")
	public int memberAjax(MemberDTO mdto){
		return mservice.idOver(mdto);
	}
	
}
