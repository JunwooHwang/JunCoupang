package org.jun.mapper;

import org.jun.domain.MemberDTO;

public interface MemberMapper {
	// 회원가입 insert
	public void insert(MemberDTO mdto);
	// 아이디 중복체크
	public int idOver(MemberDTO mdto);
}
