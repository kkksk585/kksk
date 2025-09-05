def get_user_by_id(id, users):
    """
    根据ID获取用户信息
    
    Args:
        id: 用户ID
        users: 用户列表
        
    Returns:
        User: 用户对象，如果未找到则返回None
    """
    for user in users:
        if user.get('id') == id:
            return user
    return None
